﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TomKlonowski.Model
{
    public class Note
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int SortOrder { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime? UpdateDate { get; set; }
    }
}
