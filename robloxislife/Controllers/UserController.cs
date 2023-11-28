using IdentityModel.Client;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using robloxislife.Data;
using robloxislife.Data.Migrations;
using robloxislife.DTO;
using robloxislife.Models;
using System;
using System.Security.Claims;

namespace robloxislife.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<UserDTO> Get()
        {
            var currentUser = GetCurrentUser();

            var UserData = new UserDTO
            { xp = currentUser.xp,
              guild = currentUser.Guilds != null ? currentUser.Guilds.Name : null
            };

            return UserData;

        }

        private Models.ApplicationUser GetCurrentUser()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            Models.ApplicationUser? user = _context.Users
                .Include(user => user.Guilds)
                .SingleOrDefault(user => user.Id == userId);

            return user!;
        }
        [HttpPut]
        [Route("joinGuild")]
        public async Task<IActionResult> JoinGuild(int id)
        {
            var currentUser = GetCurrentUser();
            var newGuild = await _context.Guild.FindAsync(id);

            if (newGuild == null) 
            {
                return NotFound();
            }

            currentUser.Guilds = newGuild;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut]
        [Route("leaveGuild")]
        public async Task<IActionResult> LeaveGuild()
        {
            var currentUser = GetCurrentUser();

            if (currentUser.Guilds == null) 
            { 
                return NotFound();
            }

            currentUser.Guilds = null;
            await _context.SaveChangesAsync();
            return NoContent();
        }
        [HttpGet]
        [Route("getUsersInGuild")]
        public IEnumerable<UserDTO> GetGuildById(int id)
        {
            return _context.Users
                .Include(user => user.Guilds)
                .Where(user => user.Guilds.Id == id)
                .Select(user => new UserDTO
                {
                    guild = user.Guilds.Name,
                    name = user.UserName,
                    Email = user.Email,
                    xp = user.xp

                    
                });
        }

    }
}
