using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TomKlonowski.Model;

namespace TomKlonowski.Business
{
    public interface INoteManager
    {
        Note GetNote(int noteId);
        Note CreateNote(Note newNote);
    }
}
