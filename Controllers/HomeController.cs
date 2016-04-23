using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ArtSmartV4.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        // GET: Catalog
        public ActionResult Catalog()
        {
            return View();
        }

        // GET: Cart
        public ActionResult Cart()
        {
            return View();
        }


        // GET: TabletCatalog
        public ActionResult TabletCatalog()
        {
            return View();
        }


        // GET: PrinterCatalog
        public ActionResult PrinterCatalog()
        {
            return View();
        }


        // GET: SoftwarCatalog
        public ActionResult SoftwareCatalog()
        {
            return View();
        }

        // GET: ProductDetail
        public ActionResult ProductDetail()
        {
            return View();
        }

        // GET: About
        public ActionResult About()
        {
            return View();
        }

        // GET: Contact
        public ActionResult Contact()
        {
            return View();
        }
    }
}