import API from "../../utils/API";

const actionName = "RoomType";

const RoomTypeManager = {
  getAll: async () => {
    return await API.get(`${actionName}/list`, {}).then(response => {
      return response.data;
    });
  },

  createNew: async item => {
    await API.post(`${actionName}/create`, {
      name: item.name,
      imageUrl: item.imageUrl
    }).then(response => {
      return response.data.message;
    });
  },

  edit: async item => {
    await API.post(`${actionName}/edit`, {
      id: item.id,
      name: item.name,
      imageUrl: item.imageUrl
    }).then(response => {
      return response.data.message;
    });
  },

  delete: async id => {
    await API.post(`${actionName}/delete?id=${id}`).then(response => {
      return response.data.message;
    });
  },

  handleSave: async item => {
    return await (item.id === 0
      ? RoomTypeManager.createNew(item)
      : RoomTypeManager.edit(item));
  }
};

export default RoomTypeManager;
