import axios from "axios";

class API {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:4000/api/v1"
    });
  }

  // These requests all return promises.
  getAllTasks = () => {
    return this.api.get("/todos");
  };

  getTasksbyID = id => {
    return this.api.get(`/todos/${id}`);
  };

  createTask = title => {
    return this.api.post("/todos", { title });
  };

  updateTask = id => {
    return this.api.put(`/todos/${id}`, { title });
  };

  deleteTask = id => {
    return this.api.delete(`/todos/${id}`);
  };
}

const API = new API();

export default API;
