using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repositorio.Migrations
{
    public partial class changethetables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TODOs_Users_UserId",
                table: "TODOs");

            migrationBuilder.DropIndex(
                name: "IX_TODOs_UserId",
                table: "TODOs");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "TODOs");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "TODOs",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TODOs_UserId",
                table: "TODOs",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_TODOs_Users_UserId",
                table: "TODOs",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId");
        }
    }
}
