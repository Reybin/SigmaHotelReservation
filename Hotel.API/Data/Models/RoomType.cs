using System;
using System.ComponentModel.DataAnnotations;

namespace Hotel.API.Data.Models
{
    public class RoomType
    {
        [Key]
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public DateTime CreateAt { get; set; }

    }
}
