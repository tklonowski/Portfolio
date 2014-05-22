using System;
using TomKlonowski.Data.Repository;
using TomKlonowski.Model;

namespace TomKlonowski.Business
{
    public class NoteManager : INoteManager
    {
        INoteRepository _NoteRepository = null;

        public NoteManager(INoteRepository noteRepository)
        {
            this._NoteRepository = noteRepository;
        }

        public Note GetNote(int noteId)
        {
            return this._NoteRepository.GetNote(noteId);
        }

        public Note CreateNote(Note newNote)
        {
            newNote.CreatedDate = DateTime.Now;
            return this._NoteRepository.CreateNote(newNote);
        }
    }
}
