using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace robloxislife.Data.Migrations
{
    /// <inheritdoc />
    public partial class remMembersCount : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MembersCount",
                table: "Guild");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MembersCount",
                table: "Guild",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
