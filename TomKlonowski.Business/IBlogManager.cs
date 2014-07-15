using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TomKlonowski.Model;

namespace TomKlonowski.Business
{
    public interface IBlogManager
    {
        IEnumerable<Blog> GetBlogs();
        Blog GetBlog(int blogId);
        Blog CreateBlog(Blog newBlog);
        Blog UpdateBlog(Blog updatedBlog);
        void DeleteBlog(int blogId);
    }
}
