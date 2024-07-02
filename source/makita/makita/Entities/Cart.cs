using System.ComponentModel.DataAnnotations;

namespace makita.Entities
{
    public class Cart
    {
        [Key]
        public int Id { get; set; }
        public int AccountId { get; set; }
        public int ProductId { get; set; }
        public int Amount { get; set; } = 0;

    }
}
