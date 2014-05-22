using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TomKlonowski.Api.Model.Request
{
    [Route("/test/{Name}", "GET")]
    public class HelloRequest
    {
        [ApiMember(Name = "Name", ParameterType = "query", Description = "Test Service", DataType = "string", IsRequired = true)]
        public string Name { get; set; }
    }
}
