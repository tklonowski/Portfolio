using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TomKlonowski.Model
{
    public class Blog
    {
        public int Id { get; set; }

        [StringLength(256)]
        public string Title { get; set; }

        [StringLength(256)]
        public string Description { get; set; }

        public string Body { get; set; }

        [StringLength(256)]
        public string Tags { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime? UpdateDate { get; set; }
    }
}
