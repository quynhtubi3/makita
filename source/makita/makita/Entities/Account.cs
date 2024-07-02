using System.ComponentModel.DataAnnotations;

namespace makita.Entities
{
    public class Account
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Username { get; set; } = "";
        public string Email { get; set; } = "";
        public string Password { get; set; } = "";
        public string Address { get; set; } = "";
    }
}
