using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TomKlonowski.Business;
using TomKlonowski.DB;
using TomKlonowski.Model;

namespace TomKlonowski.Website.Controllers
{
    public class HomeController : BaseController
    {
        INoteManager _NoteManager = null;

        public HomeController(INoteManager noteManager)
        {
            this._NoteManager = noteManager;
        }

        public ActionResult Index()
        {
            //var note = this._NoteManager.GetNote(20);

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
