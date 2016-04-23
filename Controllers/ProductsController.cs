using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ArtSmartV4.Controllers
{
    public class ProductsController : Controller
    {
        // GET: Products
        public ActionResult Index()
        {
            return View();
        }

        // GET: Products/FindById
        public ActionResult ProductDetail()
        {
            return View();
        }
    }
}