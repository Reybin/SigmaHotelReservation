using HotelAPI.BussinesLogic.Services.Contracts;
using HotelAPI.Data.Context;
using HotelAPI.Data.DTO;
using HotelAPI.Data.Models.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.BussinesLogic.Services
{
    public class UserService : IUserService
    {
        private UserManager<ApplicationUser> _userManager;
        private ISecurityService _securityService;
        public UserService(UserManager<ApplicationUser> userManager,ISecurityService securityService)
        {
            _userManager = userManager;
            _securityService = securityService;
        }
        public async Task<(string mesage, JwtSecurityToken token)> Register(LoginViewModel loginModel)
        {
            var result = (mesage: string.Empty, token: new JwtSecurityToken());
            if (await _userManager.FindByNameAsync(loginModel.UserName) == null)
            {
                var newUser = new ApplicationUser
                {
                    UserName = loginModel.UserName,
                    Email =String.Empty,
                    SecurityStamp = Guid.NewGuid().ToString(),
                };
                await _userManager.CreateAsync(newUser, loginModel.Password);
                var loginResult = await _securityService.RequestLogin(loginModel);
                result.token = loginResult.token;
            }
            else
            {
                result.mesage = "Este nombre de Usuario no esta disponible";
            }            
            return result;
        }
    }
}
