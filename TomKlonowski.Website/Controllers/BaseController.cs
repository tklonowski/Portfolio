using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using log4net;

namespace TomKlonowski.Website.Controllers
{
    public class BaseController : Controller
    {
        public readonly ILog log = null;

        public BaseController()
        {
            log = log4net.LogManager.GetLogger(this.GetType());
        }
    }
}
