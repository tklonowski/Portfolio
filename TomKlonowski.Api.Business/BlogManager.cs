using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TomKlonowski.Api.Data.Repository;
using TomKlonowski.Model;

namespace TomKlonowski.Api.Business
{
    public class BlogManager : IBlogManager
    {
        IBlogRepository _BlogRepository = null;

        public BlogManager(IBlogRepository blogRepository)
        {
            this._BlogRepository = blogRepository;
        }

        public IEnumerable<Blog> GetBlogs()
        {
            return this._BlogRepository.GetBlogs();
        }

        public Blog GetBlog(int blogId)
        {
            return this._BlogRepository.GetBlog(blogId);
        }

        public Blog CreateBlog(Blog newBlog)
        {
            newBlog.CreatedDate = DateTime.Now;
            return this._BlogRepository.CreateBlog(newBlog);
        }

        public Blog UpdateBlog(Blog updatedBlog)
        {
            return this._BlogRepository.UpdateBlog(updatedBlog);
        }

        public void DeleteBlog(int blogId)
        {
            this._BlogRepository.DelteBlog(blogId);
        }
    }
}
