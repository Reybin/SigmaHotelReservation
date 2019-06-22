using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel.API.Data.Context
{
    public class SeedDatabase
    {
        public static async void Initialize(IServiceProvider provider)
        {
            var context = provider.GetRequiredService<HotelDbContext>();
            var userManager = provider.GetRequiredService<UserManager<ApplicationUser>>();
            context.Database.EnsureCreated();

            if (!context.Users.Any())
            {
                var newUser = new ApplicationUser
                {
                    UserName = "test",
                    Email = "test@sigmahotel.com",
                    SecurityStamp = Guid.NewGuid().ToString(),
                };
                await userManager.CreateAsync(newUser, "Password@123");
            }
        }

    }
}
