using Ninject;
using ServiceStack.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TomKlonowski.Api
{
    public class NinjectContainerAdapter : IContainerAdapter
    {
        private readonly IKernel kernel;

        public NinjectContainerAdapter(IKernel kernel)
        {
            this.kernel = kernel;
        }

        public T Resolve<T>()
        {
            return this.kernel.Get<T>();
        }

        public T TryResolve<T>()
        {
            return this.kernel.CanResolve<T>() ? this.kernel.Get<T>() : default(T);
        }
    }
}