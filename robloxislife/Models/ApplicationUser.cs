using Microsoft.AspNetCore.Identity;
using System.Reflection.Metadata;

namespace robloxislife.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int xp {  get; set; }
       public Guilds? Guilds { get; set; } 

    }
}