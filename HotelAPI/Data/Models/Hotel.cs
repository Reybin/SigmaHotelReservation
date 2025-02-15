﻿using System;
using System.ComponentModel.DataAnnotations;


namespace HotelAPI.Data.Models
{
    public class Hotel
    {
        [Key]
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public DateTime CreateAt { get; set; }

    }
}
