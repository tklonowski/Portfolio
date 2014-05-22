using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TomKlonowski.Model;

namespace TomKlonowski.DB
{
    public class TomKlonowskiDbContext : DbContext
    {
        public TomKlonowskiDbContext()
            : base("DefaultConnection")
        {

        }

        public DbSet<Note> Notes { get; set; }
    }
}
