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
            : base("TomKlonowski")
        {

        }

        public DbSet<Note> Notes { get; set; }
        public DbSet<Blog> Blogs { get; set; }
    }
}
