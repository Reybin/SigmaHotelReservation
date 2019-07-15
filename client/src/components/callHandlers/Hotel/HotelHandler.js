import API from "../../utils/API";

const actionName = "Hotel";

const HotelManager = {
  getAll: async () => {
    return await API.get(`${actionName}/list`, {}).then(response => {
      return response.data;
    });
  },

  createNew: async hotel => {
    await API.post(`${actionName}/create`, {
      name: hotel.name,
      imageUrl: hotel.imageUrl
    }).then(response => {
      return response.data.message;
    });
  },

  edit: async hotel => {
    await API.post(`${actionName}/edit`, {
      id: hotel.id,
      name: hotel.name,
      imageUrl: hotel.imageUrl
    }).then(response => {
      return response.data.message;
    });
  },

  delete: async id => {
    await API.post(`${actionName}/delete?id=${id}`).then(response => {
      return response.data.message;
    });
  },

  handleSave: async hotel => {
    return await (hotel.id === 0
      ? HotelManager.createNew(hotel)
      : HotelManager.edit(hotel));
  }
};

export default HotelManager;
