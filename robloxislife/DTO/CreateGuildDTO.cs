namespace robloxislife.DTO
{
    public class CreateGuildDTO
    {
        public string? GuildName { get; set; } = default!;
        public string? Description { get; set; } = null;
        public int MaxMembers { get; set; } = default!;

    }
}
