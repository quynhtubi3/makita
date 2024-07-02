using System.ComponentModel.DataAnnotations;

namespace makita.Entities
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Pic { get; set; } = "";
        public string ListedPrice { get; set; } = "";
        public string CurrentPrice { get; set; } = "";
        public string Description { get; set; } = "";
        public int ProductTypeId { get; set; }
        public bool IsFav { get; set; } = false;

        public ProductType ProductType { get; set; }
    }
}
