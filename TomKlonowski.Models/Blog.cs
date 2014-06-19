using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TomKlonowski.Model
{
    public class Blog
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public string Tags { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime? UpdateDate { get; set; }
    }
}
