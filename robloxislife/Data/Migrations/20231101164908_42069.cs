using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace robloxislife.Data.Migrations
{
    /// <inheritdoc />
    public partial class _42069 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "guild",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<int>(
                name: "MembersCount",
                table: "Guild",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MembersCount",
                table: "Guild");

            migrationBuilder.AddColumn<string>(
                name: "guild",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
