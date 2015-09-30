using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(jQueryDemos.Startup))]
namespace jQueryDemos
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
