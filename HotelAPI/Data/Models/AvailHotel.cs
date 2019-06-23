using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.Data.Models
{
    public class AvailHotel
    {
        public int HotelId { get; set; }
        public Hotel Hotel { get; set; }
        public int AvailRoomId { get; set; }
        public AvailRoom AvailRooms { get; set; }
    }
}
