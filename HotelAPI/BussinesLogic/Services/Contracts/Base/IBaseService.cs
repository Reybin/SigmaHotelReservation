using System.Collections.Generic;
using System.Threading.Tasks;

namespace HotelAPI.BussinesLogic.Services.Contracts.Base
{
    public interface IBaseService<E, VM, EKEY>
    {
        List<VM> GetAll();
        Task<EKEY> Create(VM model);
        Task<(bool updated, E model)> Update(E model);
        void Delete(EKEY Key);
    }
}
