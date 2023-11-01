using IdentityModel.Client;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using robloxislife.Data;
using robloxislife.Data.Migrations;
using robloxislife.DTO;
using robloxislife.Models;
using System.Security.Claims;

namespace robloxislife.Controllers
{
    [Route("[controller]")]
    [ApiController]
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
    }
}
