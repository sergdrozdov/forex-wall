using ForexWall.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ForexWall.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ForexController : ControllerBase
    {
        private readonly ILogger<ForexController> _logger;

        public ForexController(ILogger<ForexController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<CurrencyExchange> Get()
        {
            // just for demo
            var rng = new Random();
            return Enumerable.Range(1, 1).Select(index => new CurrencyExchange
            {
                Ticker = "EUR/USD",
                BID = (decimal)rng.NextDouble(),
                ASK = (decimal)rng.NextDouble(),
                Open = (decimal)rng.NextDouble(),
                Low = (decimal)rng.NextDouble(),
                High = (decimal)rng.NextDouble(),
                Changes = (decimal)rng.NextDouble(),
                Date = DateTime.Now
            })
            .ToArray();
        }
    }
}
