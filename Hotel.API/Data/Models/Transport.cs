using Hotel.API.Data.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel.API.Data.Models
{
    public class Transport
    {
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
