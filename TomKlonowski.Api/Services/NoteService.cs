using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TomKlonowski.Api.Model.Request;
using TomKlonowski.Api.Model.Response;
using TomKlonowski.Api.Business;
using TomKlonowski.Model;

namespace TomKlonowski.Api.Service
{
    public class NoteService : IService
    {
        private INoteManager _NoteManager = null;

        public NoteService(INoteManager noteManager)
        {
            this._NoteManager = noteManager;
        }

        public object Any(GetNoteRequest request)
        {
            var note = this._NoteManager.GetNote(request.NoteId);
            return note;
        }

        public object Post(CreateNoteRequest request)
        {
            return this._NoteManager.CreateNote(Map(request));
        }

        private Note Map(CreateNoteRequest noteRequest)
        {
            Note note = new Note();
            note.Description = noteRequest.Description;
            note.Title = noteRequest.Title;

            return note;
        }
    }
}