using System;

namespace ForexWall.Models
{
    public class CurrencyExchange
    {
        public string Ticker { get; set; }
        public decimal BID { get; set; }
        public decimal ASK { get; set; }
        public decimal Open { get; set; }
        public decimal Low { get; set; }
        public decimal High { get; set; }
        public decimal Changes { get; set; }
        public DateTime Date { get; set; }
    }
}
