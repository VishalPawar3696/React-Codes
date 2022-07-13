import axios from "axios";
export function getTodos() {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=3`);
}

export function deleteTodo(id) {
  return axios({
    url: `https://jsonplaceholder.typicode.com/posts?_limit=3/${id}`,
    method: "DELETE"
  });
}
export function addTodo({ title, status }) {
  return axios({
    url: `https://jsonplaceholder.typicode.com/posts?_limit=3`,
    method: "POST",
    data: {
      title,
      status
    }
  });
}
export function toggleTodoStatus({ id, newStatus }) {
  return axios({
    url: `https://jsonplaceholder.typicode.com/posts?_limit=10/${id}`,
    methos: "PATCH",
    data: {
      newStatus
    }
  });
}
