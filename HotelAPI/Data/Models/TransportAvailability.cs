using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.Data.Models
{
    public class TransportAvailability
    {
        [Key]
        public int Id { get; set; }
        public string AvailToken { get; set; }
        public int MaxAdults { get; set; }
        public int MaxChildren { get; set; }
        public decimal Taxes { get; set; }
        public decimal Total { get; set; }
    }
}
