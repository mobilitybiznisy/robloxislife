using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; // Add this line
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using robloxislife.Data;
using robloxislife.DTO;
using robloxislife.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Security.Claims;
using System.Threading.Tasks; // Add this line

namespace robloxislife.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GuildsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GuildsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<GuildDTO> GetGuildList()
        {
            IEnumerable<Guilds> Guilds = _context.Guild;
            return Guilds.Select(Guilds => new GuildDTO
            {
                Id = Guilds.Id,
                Name = Guilds.Name,
                Description = Guilds.Description,
                MaxMebers = Guilds.MaxMebers,
                MembersCount = GetGuildmembers(Guilds.Id).Count(),
            });      
            

            
        }

        [HttpGet]
        [Route("getGuildById")]

        public GuildDetailDTO GetGuildById(int id)
        {
            Guilds guild = _context.Guild.Where(guild => guild.Id == id).FirstOrDefault();

            if (guild != null)
            { 
                var guildMembers = GetGuildmembers(guild.Id);
                return new GuildDetailDTO
                {
                    Id = guild.Id,
                    Name = guild.Name,
                    Description = guild.Description,
                    MaxMebers = guild.MaxMebers,
                    MembersCount = guildMembers.Count(),
                    Memberlist = guildMembers.Select(h => new UserDTO
                    { name = h.UserName,
                        xp = h.xp
                    }).ToList(),

                };
            }
            else
            {
                return null;
            }
        }

        private IEnumerable<ApplicationUser> GetGuildmembers(int guildId)
        {
            IQueryable<ApplicationUser> users = _context.Users.Include(applicationUser => applicationUser.Guilds).AsNoTracking();

            return users.Where(u => u.Guilds.Id == guildId);


        }

    }
}


