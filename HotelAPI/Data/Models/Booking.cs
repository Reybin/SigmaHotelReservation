using HotelAPI.Data.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HotelAPI.Data.Models
{
    public class Booking
    {
        [Key]
        public int Id { get; set; }
        public string Number { get; set; }
        public DateTime Since { get; set; }
        public DateTime Until { get; set; }
        public int HotelId { get; set; }
        public virtual Hotel Hotel { get; set; }
        public int Nights { get; set; }
        public int Adults { get; set; }
        public int Childrens { get; set; }
        public Status Status { get; set; }
        public string StatusDescription { get; set; }
        public double Taxes { get; set; }
        public double Total { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int UpdatedById { get; set; }
        public string UpdatedByName { get; set; }


        public virtual ICollection<Room> Rooms { get; set; }
        public virtual ICollection<Transport> Transports { get; set; }
    }
}
