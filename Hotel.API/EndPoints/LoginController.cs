using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel.API.BussinesLogic.Services.Contracts;
using Hotel.API.Data.Models.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace Hotel.API.EndPoints
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private ISecurityService _securityService;
        public LoginController(ISecurityService securityService)
        {
            _securityService = securityService;
        }
        [HttpPost]
        public async Task<IActionResult> Index([FromBody] LoginViewModel loginForm)
        {
            if (await _securityService.RequestLogin(loginForm))
                return Ok();
            return Unauthorized();
        }
    }
}