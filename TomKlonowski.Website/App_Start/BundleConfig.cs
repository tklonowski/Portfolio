using System.Web;
using System.Web.Optimization;

namespace TomKlonowski.Website
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            #region Scripts

            bundles.Add(new ScriptBundle("~/bundles/jquery")
                .Include("~/Scripts/jquery/jquery-1.9.0.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui")
                .Include("~/Scripts/jquery/jquery-ui-1.8.24.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval")
                .Include("~/Scripts/jquery/jquery.unobtrusive-ajax.js",
                         "~/Scripts/jquery/jquery.validate.js",
                         "~/Scripts/jquery/jquery.validate.unobtrusive.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular")
                .Include("~/Scripts/angular/angular.js",
                         "~/Scripts/angular/angular-animate.js",
                         "~/Scripts/angular/angular-resource.js",
                         "~/Scripts/angular/angular-route.js",
                         "~/Scripts/angular/angular-bootstrap_ui.0.11.0.js",
                         "~/Angular/app.js")
            .IncludeDirectory("~/Angular/controllers", "*.js")
            .IncludeDirectory("~/Angular/services", "*.js")
            .IncludeDirectory("~/Angular/filters", "*.js")
            .IncludeDirectory("~/Angular/directives", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/custom")
                .Include("~/Scripts/Navigation.js",
                         "~/Scripts/Utilities.js",
                         "~/Scripts/Blogs.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquerycustomlibs")
                .Include("~/Scripts/libs/jquery.ba-dotimeout.js"));

            bundles.Add(new ScriptBundle("~/bundles/skel")
                .Include("~/Scripts/skel.min.js"));

            #endregion

            #region Styles


            bundles.Add(new StyleBundle("~/Content/css").Include(
                        "~/Content/style.css",
                        "~/Content/skel.css"));

            #endregion
        }
    }
}