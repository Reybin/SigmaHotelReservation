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
    public class UsersController : Controller
    {
        private IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpPost, Route("register")]
        public async Task<IActionResult> Register([FromBody]LoginViewModel loginModel)
        {
            var (mesage, token) = await _userService.Register(loginModel);
            if (string.IsNullOrEmpty(mesage))
            {
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });                
            }
            return Unauthorized();
        }
    }
}