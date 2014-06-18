using System.Web;
using System.Web.Optimization;

namespace TomKlonowski.Website
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            #region Scripts

            bundles.Add(new ScriptBundle("~/bundles/jquery")
                .Include("~/Scripts/jquery/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui")
                .Include("~/Scripts/jquery/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval")
                .Include("~/Scripts/jquery/jquery.unobtrusive*",
                        "~/Scripts/jquery/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/angular")
                .Include("~/Scripts/angular/angular.js",
                         "~/Scripts/angular/angular-animate.js",
                         "~/Scripts/angular/angular-resource.js",
                         "~/Scripts/angular/angular-route.js")
                .IncludeDirectory("~/Scripts/angular/modules", "*.js")
                .IncludeDirectory("~/Scripts/angular/controllers", "*.js")
                .IncludeDirectory("~/Scripts/angular/directives", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/custom")
                .Include("~/Scripts/Navigation.js"));


            #endregion

            #region Styles

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));

            #endregion
        }
    }
}