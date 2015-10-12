using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJSDemos.Startup))]
namespace AngularJSDemos
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
