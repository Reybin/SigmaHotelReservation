using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using HotelAPI.BussinesLogic.Services.Contracts;
using HotelAPI.Data.Models.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace HotelAPI.EndPoints
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    [EnableCors("SiteCorsPolicy")]
    public class AuthController : Controller
    {
        private ISecurityService _securityService;
        public AuthController(ISecurityService securityService)
        {
            _securityService = securityService;
        }
        [HttpPost, Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel loginForm)
        {
            var (logged, token) = await _securityService.RequestLogin(loginForm);

            if (logged)
                return Ok(new {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });

            return Unauthorized();
        }
    }
}