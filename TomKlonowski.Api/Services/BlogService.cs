using ServiceStack;
using ServiceStack.Text;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TomKlonowski.Api.Models.Request;
using TomKlonowski.Api.Business;
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
            return blogs.OrderByDescending(o => o.CreatedDate);
        }

        public object Post(CreateBlogRequest request)
        {
            return this._BlogManager.CreateBlog(Map(request));
        }

        public object Put(UpdateBlogRequest request)
        {
            return this._BlogManager.UpdateBlog(Map(request));
        }

        public void Delete(DeleteBlogRequest request)
        {
            this._BlogManager.DeleteBlog(request.BlogId);
        }

        private Blog Map(CreateBlogRequest blogRequest)
        {
            Blog blog = new Blog();
            blog.Body = blogRequest.Body;
            blog.Tags = blogRequest.Tags;
            blog.Title = blogRequest.Title;
            blog.Description = blogRequest.Description;

            return blog;
        }

        private Blog Map(UpdateBlogRequest blogRequest)
        {
            Blog blog = new Blog();
            blog.Id = blogRequest.Id;
            blog.Body = blogRequest.Body;
            blog.Tags = blogRequest.Tags;
            blog.Title = blogRequest.Title;
            blog.Description = blogRequest.Description;

            return blog;
        }
    }
}