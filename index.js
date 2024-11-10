import axios from "axios";

// axios
//   .get("https://reqres.in/api/users/2")
//   .then((res) => console.log(res.data.data))
//   .catch((err) => console.log(err));

// Single User
const getAllPosts = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users/2");
    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

// Create
const createData = async (payload) => {
  try {
    const response = await axios.post("https://reqres.in/api/users", payload);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const payload = {
  name: "morpheus",
  job: "leader",
};

// Update
const updateData = async (payload) => {
  try {
    const response = await axios.put("https://reqres.in/api/users/2", payload);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const payloadUpdate = {
  name: "morpheus",
  job: "zion resident",
};

// Delete
const deletePostById = async (id) => {
  try {
    const response = await axios.delete(`https://reqres.in/api/users/${id}`);
    if (response.status === 204) {
      console.log("Data berhasil dihapus");
    } else {
      console.log("Tidak ada data yang dihapus");
    }
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

getAllPosts();
createData(payload);
updateData(payloadUpdate);
deletePostById(1);
