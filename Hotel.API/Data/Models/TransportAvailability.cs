using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel.API.Data.Models
{
    public class TransportAvailability
    {
        public string AvailToken { get; set; }
        public int MaxAdults { get; set; }
        public int MaxChildren { get; set; }
        public decimal Taxes { get; set; }
        public decimal Total { get; set; }
    }
}
