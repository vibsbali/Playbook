using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace NgPlaybook.Server.Api
{
    public class SlowController : ApiController
    {
        public IHttpActionResult Get()
        {
            Thread.Sleep(2000);

            return Ok();
        }
    }
}
