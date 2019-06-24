using HotelAPI.Data.Context;
using HotelAPI.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.BussinesLogic.Services
{
    public class RoomTypeService
    {
        private HotelDbContext _context;
        public RoomTypeService(HotelDbContext context)
        {
            _context = context;
        }
        public async Task<int> Create(RoomType model)
        {
            await _context.RoomType.AddAsync(model);
            return await _context.SaveChangesAsync();
        }

        public void Delete(int key)
        {
            var roomType = _context.RoomType.FirstOrDefault(x => x.Id == key);
            if (roomType != null)
                _context.RoomType.Remove(roomType);
        }

        public List<Hotel> GetAll() => _context.Hotel.ToList();

        public async Task<(bool updated, RoomType model)> Update(RoomType model)
        {
            var roomTypeToUpdate = _context.RoomType.FirstOrDefault(x => x.Id == model.Id);
            var result = (updated: false, model);
            if (roomTypeToUpdate != null)
            {
                roomTypeToUpdate = model;
                _context.RoomType.Update(model);
                await _context.SaveChangesAsync();
                result.updated = true;
            }
            return result;
        }
    }
}
