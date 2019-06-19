using Hotel.API.Data.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Hotel.API.Data.Models
{
    public class Room
    {
        [Key]
        public int Id { get; set; }
        public int RoomTypeId { get; set; }
        public RoomType RoomType { get; set; }
        public int BookingId { get; set; }
        public Booking Booking { get; set; }
        public Status Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int UpdatedById { get; set; }
        public string UpdatedByName { get; set; }
        public virtual ICollection<Guest> Guests { get; set; }
    }
}
