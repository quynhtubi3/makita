﻿namespace makita.Entities
{
    public class ProductType
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";

        public IEnumerable<Product> Products { get; set;}
    }
}
