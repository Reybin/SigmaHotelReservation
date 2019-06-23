using System.ComponentModel.DataAnnotations;

namespace HotelAPI.Data.Models.ViewModel
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Nombre de Usuario Requerido")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Contraseña Requerida")]
        public string Password { get; set; }
    }
}
