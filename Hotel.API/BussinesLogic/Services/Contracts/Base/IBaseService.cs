using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel.API.BussinesLogic.Services.Contracts.Base
{
    public interface IBaseService<E, VM, EKEY>
    {
        Task<List<VM>> GetAll();
        E Create(VM model);
        E Update(E model);
        void Delete(EKEY Key);
    }
}
