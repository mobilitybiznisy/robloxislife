using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace robloxislife.Data.Migrations
{
    /// <inheritdoc />
    public partial class hahahhaha : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GuildsId",
                table: "Guild",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "GuildsId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Guild_GuildsId",
                table: "Guild",
                column: "GuildsId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_GuildsId",
                table: "AspNetUsers",
                column: "GuildsId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Guild_GuildsId",
                table: "AspNetUsers",
                column: "GuildsId",
                principalTable: "Guild",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Guild_Guild_GuildsId",
                table: "Guild",
                column: "GuildsId",
                principalTable: "Guild",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Guild_GuildsId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Guild_Guild_GuildsId",
                table: "Guild");

            migrationBuilder.DropIndex(
                name: "IX_Guild_GuildsId",
                table: "Guild");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_GuildsId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "GuildsId",
                table: "Guild");

            migrationBuilder.DropColumn(
                name: "GuildsId",
                table: "AspNetUsers");
        }
    }
}
