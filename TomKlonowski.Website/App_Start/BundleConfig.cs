using System.Web;
using System.Web.Optimization;

namespace TomKlonowski.Website
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            #region Scripts

            bundles.Add(new ScriptBundle("~/bundles/angular")
                .Include("~/Scripts/angular/angular.js",
                         "~/Scripts/angular/angular-animate.js",
                         "~/Scripts/angular/angular-resource.js",
                         "~/Scripts/angular/angular-route.js",
                         "~/Scripts/angular/angular-bootstrap_ui.0.11.0.js",
                         "~/Angular/app.js")
            .IncludeDirectory("~/Angular/controllers", "*.js", true)
            .IncludeDirectory("~/Angular/services", "*.js", true)
            .IncludeDirectory("~/Angular/filters", "*.js", true)
            .IncludeDirectory("~/Angular/directives", "*.js", true));

            bundles.Add(new ScriptBundle("~/bundles/custom")
                .Include("~/Scripts/Navigation.js",
                         "~/Scripts/Utilities.js",
                         "~/Scripts/Blogs.js"));

            bundles.Add(new ScriptBundle("~/bundles/skel")
                .Include("~/Scripts/libs/skel.js"));

            bundles.Add(new ScriptBundle("~/bundles/global")
                .Include("~/Scripts/Global.js"));

            #endregion

            #region Styles


            bundles.Add(new StyleBundle("~/Content/css").Include(
                        "~/Content/style.css",
                        "~/Content/skel.css"));

            #endregion
        }
    }
}