using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace robloxislife.Data.Migrations
{
    /// <inheritdoc />
    public partial class xp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "guild",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
            
            migrationBuilder.AddColumn<int>(
                name: "xp",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "guild",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "xp",
                table: "AspNetUsers");
        }
    }
}
