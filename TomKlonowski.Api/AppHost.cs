using Funq;
using Ninject;
using ServiceStack;
using ServiceStack.Api.Swagger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TomKlonowski.Api.App_Start;
using TomKlonowski.Api.Service;

namespace TomKlonowski.Api
{
    public class AppHost : AppHostBase
    {
        public AppHost()
            : base("Note Web Service", typeof(Global).Assembly) { }

        public override void Configure(Container container)
        {
            container.Adapter = NinjectWebCommon.CreateServiceStackAdapter();

            Plugins.Add(new SwaggerFeature());
            Plugins.Add(new CorsFeature());
        }
    }
}