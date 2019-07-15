using HotelAPI.BussinesLogic.Services.Contracts;
using HotelAPI.Data.Context;
using HotelAPI.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.BussinesLogic.Services
{
    public class HotelService : IHotelService
    {
        private HotelDbContext _context;
        public HotelService(HotelDbContext context)
        {
            _context = context;
        }
        public async Task<int> Create(Hotel model)
        {
            await _context.Hotel.AddAsync(model);
           return await _context.SaveChangesAsync();
        }

        public void Delete(int key)
        {
            var hotel = _context.Hotel.FirstOrDefault(x => x.Id == key);
            if (hotel != null)
            {
                _context.Hotel.Remove(hotel);
                _context.SaveChanges();
            }
        }

        public List<Hotel> GetAll() => _context.Hotel.ToList();

        public async Task<(bool updated, Hotel model)> Update(Hotel model)
        {
            var hotelToUpdate = _context.Hotel.AsNoTracking().FirstOrDefault(x => x.Id == model.Id);
            var result = (updated: false, model: model);
            if (hotelToUpdate != null)
            {                
                hotelToUpdate = model;
                _context.Hotel.Update(model);
                await _context.SaveChangesAsync();
                result.updated = true;             
            }
            return result;
        }
    }
}
