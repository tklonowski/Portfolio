using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TomKlonowski.Api.Business;
using Moq;
using TomKlonowski.Model;

namespace TomKlonowski.Test
{
    [TestClass]
    public class ManagerTests
    {
        private Mock<INoteManager> _NoteManager;

        [TestInitialize]
        public void TestInitialize()
        {
            
        }
        [TestMethod]
        public void TestMethod1()
        {
            //Arrange
            _NoteManager = new Mock<INoteManager>();

            var note = new Note();
            note.Id = 1;
            note.SortOrder = 1;
            note.Title = "Test Title";
            note.Description = "Test Description";
            note.CreatedDate = DateTime.Now;

            var setup = _NoteManager.Setup(x => x.CreateNote(note)).Returns(note);

            Assert.AreEqual(1, 1);
        }
    }
}
