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
    [Route("api/user")]
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
             guild = currentUser.guild
            };

            return UserData;

        }

        private Models.ApplicationUser GetCurrentUser()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            Models.ApplicationUser? user = _context.Users
                .SingleOrDefault(user => user.Id == userId);

            return user!;
        }
    }
}
