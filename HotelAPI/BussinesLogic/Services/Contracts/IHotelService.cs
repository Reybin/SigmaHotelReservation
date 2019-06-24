using HotelAPI.BussinesLogic.Services.Contracts.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotelAPI.Data.Models;

namespace HotelAPI.BussinesLogic.Services.Contracts
{
    public interface IHotelService : IBaseService<Hotel, Hotel, int>
    {
        
    }
}
