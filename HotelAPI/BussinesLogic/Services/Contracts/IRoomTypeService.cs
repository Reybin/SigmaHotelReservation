using HotelAPI.BussinesLogic.Services.Contracts.Base;
using HotelAPI.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.BussinesLogic.Services.Contracts
{
    public interface IRoomTypeService : IBaseService<RoomType,RoomType, int>
    {
    }
}
