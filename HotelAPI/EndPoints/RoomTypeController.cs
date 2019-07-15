using HotelAPI.BussinesLogic.Services.Contracts;
using HotelAPI.Data.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace HotelAPI.EndPoints
{
    [Route("api/[controller]")]
    [EnableCors("custom")]
    public class RoomTypeController : Controller
    {
        private readonly IRoomTypeService service;

        public RoomTypeController(IRoomTypeService _service)
        {
            service = _service;
        }
        [HttpGet, Route("list")]
        public ActionResult Index()
        { 
            return Json(service.GetAll());
        }

        [HttpPost, Route("create")]
        public ActionResult Create([FromBody] RoomType form)
        {
            var id = service.Create(form).Result;

            if (id > 0)
                return Ok(new { message = "Creado con Exito" });

            return Json(new { message = "Ocurrio un Error" });

        }

        // POST: Hotel/Edit/5
        [HttpPost, Route("edit")]
        public ActionResult Edit([FromBody] RoomType form)
        {
            var (updated, item) = service.Update(form).Result;

            if (updated)
                return Ok(new { message = "Actualizado con Exito" });

            return Json(new { message = "Ocurrio un Error" });
        }

        // POST: Hotel/Delete/5
        [HttpPost, Route("delete")]
        public ActionResult Delete(int id)
        {
            service.Delete(id);
            return Json(new { message = "Borrado Con Exito" });
        }
    }
}