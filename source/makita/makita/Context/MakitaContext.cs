using makita.Entities;
using Microsoft.EntityFrameworkCore;

namespace makita.Context
{
    public class MakitaContext : DbContext
    {
        public MakitaContext(DbContextOptions<MakitaContext> options) : base(options)
        {
        }
        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<Product> Products { get; set; }
    }
}
