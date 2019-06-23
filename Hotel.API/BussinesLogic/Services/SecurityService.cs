using Hotel.API.BussinesLogic.Services.Contracts;
using Hotel.API.Data.Context;
using Hotel.API.Data.Models.ViewModel;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Hotel.API.Data.DTO;
using Microsoft.Extensions.Options;

namespace Hotel.API.BussinesLogic.Services
{
    public class SecurityService : ISecurityService
    {
        private UserManager<ApplicationUser> _userManager;
        private TokenSettingsDTO _TSettings;
        public SecurityService(UserManager<ApplicationUser> userManager, IOptions<TokenSettingsDTO> TSettings)
        {
            _userManager = userManager;
            _TSettings = TSettings.Value;
        }
        
        public async Task<(bool logged, JwtSecurityToken token)> RequestLogin(LoginViewModel loginModel)
        {
            var user = await _userManager.FindByNameAsync(loginModel.UserName);
            var canLogin = user != null && await _userManager.CheckPasswordAsync(user, loginModel.Password);
            var result = (logged: canLogin, token: new JwtSecurityToken());

            if (canLogin)
                result.token = SetUserToken(user);

            return result;
        }

        private JwtSecurityToken SetUserToken(ApplicationUser user)
        {
            var loginKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_TSettings.SecretKey));

            return new JwtSecurityToken(
                issuer: _TSettings.Issuer,
                audience: _TSettings.Audience,
                expires: DateTime.Now.AddHours(7),
                claims: GetNewClaims(user),
                signingCredentials: new SigningCredentials(loginKey, SecurityAlgorithms.HmacSha256)
                );
        }

        private static Claim[] GetNewClaims(ApplicationUser user)
        {
            return new[]
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName)
            };
        }
    }
}
