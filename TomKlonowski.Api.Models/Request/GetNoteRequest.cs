using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TomKlonowski.Api.Model.Request
{
    [Route("/note/{NoteId}", "GET")]
    public class GetNoteRequest
    {
        [ApiMember(Name = "NoteId", ParameterType = "query", Description = "Id of the Note to get", DataType = "int", IsRequired = true)]
        public int NoteId { get; set; }
    }
}
