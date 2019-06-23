using HotelAPI.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.Data.Models
{
    public class BookingAvailability
    {
        public int DraftBookingId { get; set; }
        public Booking DraftBooking { get; set; }
        public DateTime Since { get; set; }
        public DateTime Until { get; set; }
        public int Nights { get; set; }
        public int Adults { get; set; }
        public int Childrens { get; set; }
    }
}
