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

        public string Description { get; set; }
    }

    [Route("/blog/{BlogId}", "GET")]
    public class GetBlogRequest
    {
        [ApiMember(Name = "BlogId", ParameterType = "path", Description = "Id of the Blog to get", DataType = "int", IsRequired = true)]
        public int BlogId { get; set; }
    }

    [Route("/blog", "GET")]
    public class GetBlogsRequest
    {
    }

    [Route("/blog/{BlogId}", "DELETE")]
    public class DeleteBlogRequest
    {
        [ApiMember(Name = "BlogId", ParameterType="path", Description = "Id of the Blog to delete", DataType = "int", IsRequired = true)]
        public int BlogId { get; set; }
    }

    [Route("/blog", "PUT")]
    public class UpdateBlogRequest
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public string Tags { get; set; }

        public string Description { get; set; }
    }
}
