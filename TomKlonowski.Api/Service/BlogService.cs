using ServiceStack;
using ServiceStack.Text;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TomKlonowski.Api.Models.Request;
using TomKlonowski.Business;
using TomKlonowski.Model;

namespace TomKlonowski.Api.Service
{
    public class BlogService : IService
    {
        private IBlogManager _BlogManager = null;

        public BlogService(IBlogManager blogManager)
        {
            this._BlogManager = blogManager;
        }

        public object Any(GetBlogRequest request)
        {
            JsConfig.DateHandler = DateHandler.UnixTime;
            var blog = this._BlogManager.GetBlog(request.BlogId);
            return blog;
        }

        public object Any(GetBlogsRequest request)
        {
            JsConfig.DateHandler = DateHandler.UnixTimeMs;
            var blogs = this._BlogManager.GetBlogs();
            return blogs;
        }

        public object Post(CreateBlogRequest request)
        {
            return this._BlogManager.CreateBlog(Map(request));
        }

        private Blog Map(CreateBlogRequest blogRequest)
        {
            Blog blog = new Blog();
            blog.Body = blogRequest.Body;
            blog.Tags = blogRequest.Tags;
            blog.Title = blogRequest.Title;

            return blog;
        }
    }
}