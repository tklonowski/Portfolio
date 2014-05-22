using System;
using System.Collections.Generic;
using TomKlonowski.Data.Repository;
using TomKlonowski.Model;

namespace TomKlonowski.DB
{
    public class SqlRepository : INoteRepository
    {
        #region Notes

        public IEnumerable<Note> GetAllNotes()
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
    }
}
