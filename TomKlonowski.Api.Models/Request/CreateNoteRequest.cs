using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TomKlonowski.Api.Model.Request
{
    [Route("/note", "POST")]
    public class CreateNoteRequest
    {
        public string Title { get; set; }

        public string Description { get; set; }
    }
}
