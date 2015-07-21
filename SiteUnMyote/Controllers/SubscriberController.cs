using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SiteUnMyote.Controllers
{
    public class SubscriberController : Controller
    {
        // GET: Subscriber
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        [Route("api/SubscriberController/subscribe")]
        [ActionName("subscribe")]
        public ActionResult Subscriber()
        {
            Console.WriteLine("Hello world");
            return null;
        }
    }
}