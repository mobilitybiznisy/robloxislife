namespace robloxislife.DTO
{
    public class GuildDTO
    {
        public int Id { get; set; } = default!;
        public string? Name { get; set; } = default!;
        public string? Description { get; set; } = null;
        public int MaxMebers { get; set; } = default!;
        public int MembersCount { get; set; } = default!;
    }
}
