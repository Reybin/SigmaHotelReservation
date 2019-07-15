using HotelAPI.BussinesLogic.Services;
using HotelAPI.BussinesLogic.Services.Contracts;
using HotelAPI.Data.Context;
using HotelAPI.Data.DTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace HotelAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {



            var origins = new string[] {
                "http://localhost:3000", // development
		        "http://localhost/TM", // IIS
	        };
            services.AddCors(options =>
            {
                options.AddPolicy("custom",
                builder =>
                {
                    builder.WithOrigins(origins)
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                });

            });





                //var corsBuilder = new CorsPolicyBuilder();// for a specific url. Don't add a forward slash on the end!
                //corsBuilder.AllowAnyHeader();
                //corsBuilder.AllowAnyMethod();
                ////corsBuilder.AllowAnyOrigin(); // For anyone access.
                //corsBuilder.AllowCredentials();

                //services.AddCors(options =>
                //{
                //    options.AddPolicy("SiteCorsPolicy", corsBuilder.Build());
                //});

                services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
                services.AddDbContext<HotelDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("HotelConnection")));
                services.AddIdentity<ApplicationUser, IdentityRole>()
                    .AddEntityFrameworkStores<HotelDbContext>()
                    .AddDefaultTokenProviders();
                services.Configure<TokenSettingsDTO>(Configuration.GetSection("TokenSettings"));

                var TSettings = Configuration.GetSection("TokenSettings");

                services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.SaveToken = true;
                    options.RequireHttpsMetadata = false;                 
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidIssuer = TSettings["Issuer"],
                        ValidAudience = TSettings["Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(TSettings["SecretKey"]))
                    };

                });

                services.AddTransient<ISecurityService, SecurityService>();
                services.AddTransient<IUserService, UserService>();
                services.AddTransient<IHotelService, HotelService>();
                services.AddTransient<IRoomTypeService, RoomTypeService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
            public void Configure(IApplicationBuilder app, IHostingEnvironment env)
            {
                if (env.IsDevelopment())
                {
                    app.UseDeveloperExceptionPage();
                }
                else
                {
                    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                    app.UseHsts();
                }

                SeedDatabase.Initialize(app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope().ServiceProvider);
                app.UseHttpsRedirection();
                app.UseAuthentication();
                app.UseMvc();
                app.UseCors("custom");
            }
        }
    }
