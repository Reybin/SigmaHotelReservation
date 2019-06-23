using Hotel.API.BussinesLogic.Services.Contracts.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel.API.Data;

namespace Hotel.API.BussinesLogic.Services.Contracts
{
    public interface IHotelService : IBaseService<Models.Hotel, Hotel, int>
    {
    }
}
