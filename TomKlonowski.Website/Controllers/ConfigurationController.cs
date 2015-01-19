using System.Configuration;
using System.Web.Mvc;
using TomKlonowski.Website.Models;

namespace TomKlonowski.Website.Controllers
{
    public class ConfigurationController : BaseController
    {
        public JsonResult All()
        {
            var model = new ConfigurationModel();
            model.ServiceStackUrl = ConfigurationManager.AppSettings["ServiceStackUrl"];
            model.SiteUrl = ConfigurationManager.AppSettings["SiteUrl"];

            return Json(model, JsonRequestBehavior.AllowGet);
        }
    }
}
