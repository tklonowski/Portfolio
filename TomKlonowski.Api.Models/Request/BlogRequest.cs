using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TomKlonowski.Api.Models.Request
{
    [Route("/blog", "POST")]
    public class CreateBlogRequest
    {
        public string Title { get; set; }

        public string Body { get; set; }

        public string Tags { get; set; }
    }

    [Route("/blog/{BlogId}", "GET")]
    public class GetBlogRequest
    {
        [ApiMember(Name = "BlogId", ParameterType = "query", Description = "Id of the Blog to get", DataType = "int", IsRequired = true)]
        public int BlogId { get; set; }
    }

    [Route("/blog", "GET")]
    public class GetBlogsRequest
    {
    }
}
