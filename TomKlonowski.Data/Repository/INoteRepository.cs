using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TomKlonowski.Model;

namespace TomKlonowski.Data.Repository
{
    public interface INoteRepository
    {
        IEnumerable<Note> GetAllNotes();
        Note GetNote(int noteId);
        Note CreateNote(Note newNote);
        Note UpdateNote(Note updatedNote);
        void DelteNote(int noteId);
    }
}
