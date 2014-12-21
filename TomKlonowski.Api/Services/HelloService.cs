using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TomKlonowski.Api.Model.Request;
using TomKlonowski.Api.Model.Response;

namespace TomKlonowski.Api.Service
{
    public class HelloService : IService
    {
        public object Any(HelloRequest request)
        {
            var name = request.Name ?? "John Doe";
            return new HelloResponse { Result = "Hello, " + name };
        }
    }
}