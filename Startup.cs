using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ArtSmartV4.Startup))]
namespace ArtSmartV4
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
           
        }
    }
}
