using Microsoft.AspNetCore.Mvc;
using robloxislife.Data.Migrations;

namespace robloxislife.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet("{Id}/xp")]
        public IActionResult GetUserXp(string Username)
        {
            var UserXp = 
        }
    }
}
