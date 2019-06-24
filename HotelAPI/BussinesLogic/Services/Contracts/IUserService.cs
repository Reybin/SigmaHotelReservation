using HotelAPI.Data.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace HotelAPI.BussinesLogic.Services.Contracts
{
    public interface IUserService
    {
        Task<(string mesage, JwtSecurityToken token)> Register(LoginViewModel loginModel);
    }
}
