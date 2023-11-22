using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; // Add this line
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using robloxislife.Data;
using robloxislife.DTO;
using robloxislife.Models;
using System;
using System.Collections.Generic;
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
        public IEnumerable<Guilds> GetGuildList()
        {
            IEnumerable<Guilds> Guilds = _context.Guild;
            return Guilds.Select(Guilds => new Guilds
            {
                Id = Guilds.Id,
                Name = Guilds.Name,
                Description = Guilds.Description,
                MaxMebers = Guilds.MaxMebers,
                MembersCount = GetGuildmembersCount(Guilds.Id)
            });      
            

            
        }
        private int GetGuildmembersCount(int guildId)
        {
            IQueryable<ApplicationUser> users = _context.Users.Include(applicationUser => applicationUser.Guilds).AsNoTracking();

#pragma warning disable CS8602 // Dereference of a possibly null reference.
            return users.Where(u => u.Guilds.Id == guildId).Count();
#pragma warning restore CS8602 // Dereference of a possibly null reference.


        }

        public IEnumerable<Guilds> GetGuildId()
        {
            IEnumerable<Guilds> Guilds = _context.Guild;
            return Guilds.Select(Guilds => new Guilds
            {
                Id = Guilds.Id,
            });



        }
    }
}


