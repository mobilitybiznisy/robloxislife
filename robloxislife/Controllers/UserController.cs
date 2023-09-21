using Microsoft.AspNetCore.Mvc;
using robloxislife.Data.Migrations;
using robloxislife.DTO;

namespace robloxislife.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet("{Id}/xp")]
        public IActionResult GetUserXp(string Username)
        {
            UserDTO neviem = new UserDTO();
            var UserXp = neviem;
        }
    }
}
