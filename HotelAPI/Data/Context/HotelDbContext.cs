using HotelAPI.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.Data.Context
{
    public class HotelDbContext : IdentityDbContext<ApplicationUser>
    {
        public HotelDbContext(DbContextOptions<HotelDbContext> options) : base(options)
        {

        }

        public DbSet<Hotel> Hotel { get; set; }
        public DbSet<RoomType> RoomType { get; set; }
        public DbSet<AvailHotel> AvailHotel { get; set; }
        public DbSet<AvailRoom> AvailRoom { get; set; }
        public DbSet<Booking> Booking { get; set; }
        public DbSet<BookingAvailability> BookingAvailability { get; set; }
        public DbSet<Guest> Guest { get; set; }
        public DbSet<Room> Room { get; set; }
        public DbSet<Transport> Transport { get; set; }
        public DbSet<TransportAvailability> TransportAvailability { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
