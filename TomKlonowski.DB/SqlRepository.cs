using System;
using System.Collections.Generic;
using TomKlonowski.Data.Repository;
using TomKlonowski.Model;

namespace TomKlonowski.DB
{
    public class SqlRepository : IBlogRepository, INoteRepository
    {
        #region Notes

        public IEnumerable<Note> GetNotes()
        {
            throw new NotImplementedException();
        }

        public Note GetNote(int noteId)
        {
            return new TomKlonowskiDbContext().Notes.Find(noteId);
        }

        public Note CreateNote(Note newNote)
        {
            using (var db = new TomKlonowskiDbContext())
            {
                db.Notes.Add(newNote);
                db.SaveChanges();

                return newNote;
            }
        }

        public Note UpdateNote(Note updatedNote)
        {
            throw new NotImplementedException();
        }

        public void DelteNote(int noteId)
        {
            throw new NotImplementedException();
        }

        #endregion

        #region Blogs

        public IEnumerable<Blog> GetBlogs()
        {
            return new TomKlonowskiDbContext().Blogs;
        }

        public Blog GetBlog(int blogId)
        {
            return new TomKlonowskiDbContext().Blogs.Find(blogId);
        }

        public Blog CreateBlog(Blog newBlog)
        {
            using (var db = new TomKlonowskiDbContext())
            {
                db.Blogs.Add(newBlog);
                db.SaveChanges();

                return newBlog;
            }
        }

        public Blog UpdateBlog(Blog updatedBlog)
        {
            throw new NotImplementedException();
        }

        public void DelteBlog(int blogId)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
