using Hotel.API.Data.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel.API.Data.Models
{
    public class Guest
    {
        public int Id { get; set; }
        public int RoomId { get; set; }
        public Room Room { get; set; }
        public string Name { get; set; }
        public AgeQualifying AgeQualifying { get; set; }
        public string AgeQualifyingDescription { get; set; }
        public Status Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int UpdatedBy { get; set; }
        public string UpdatedByName { get; set; }


    }
}
