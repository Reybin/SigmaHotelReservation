using HotelAPI.Data.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.Data.Models
{
    public class Transport
    {
        [Key]
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string OriginCode { get; set; }
        public OriginType OriginType { get; set; }
        public string DestinationCode { get; set; }
        public DestinatinationType DestinatinationType { get; set; }
        public Status Status { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
