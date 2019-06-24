using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.Data.DTO
{
    public class TokenSettingsDTO
    {
        public string SecretKey { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
    }
}
