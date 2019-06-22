using Hotel.API.Data.Context;
using Hotel.API.Data.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel.API.BussinesLogic.Services.Contracts
{
    public interface ISecurityService
    {
        Task<bool> RequestLogin(LoginViewModel loginModel);
    }
}
