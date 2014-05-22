[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(TomKlonowski.Api.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(TomKlonowski.Api.App_Start.NinjectWebCommon), "Stop")]

namespace TomKlonowski.Api.App_Start
{
    using Microsoft.Web.Infrastructure.DynamicModuleHelper;
    using Ninject;
    using Ninject.Web.Common;
    using ServiceStack.Configuration;
    using System;
    using System.Web;
    using TomKlonowski.Business;
    using TomKlonowski.Data.Repository;
    using TomKlonowski.DB;

    public static class NinjectWebCommon 
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }
        
        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                RegisterServices(kernel);
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        public static IContainerAdapter CreateServiceStackAdapter()
        {
            if (bootstrapper.Kernel == null)
            {
                Start();
            }
            return new NinjectContainerAdapter(bootstrapper.Kernel);
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            //Repositories
            kernel.Bind<INoteRepository>().To<SqlRepository>();

            //Managers
            kernel.Bind<INoteManager>().To<NoteManager>();
        }        
    }
}
