using Microsoft.AspNetCore.Identity;

namespace robloxislife.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int xp {  get; set; }
        public string? Guild { get; set; }

    }
}