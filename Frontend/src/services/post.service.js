import api from "./api"; // import api เพื่อเชื่อมต่อกับ API
const API_URL = import.meta.env.VITE_BASE_URL + "/post";

// ฟังก์ชันสำหรับสร้างโพสต์
const createPost = async (post) => {
  const response = await api.post(API_URL, post, {
    headers: {
      "Content-Type": "multipart/form-data", // สำหรับการส่งไฟล์
    },
  });
  return response;
};

// ฟังก์ชันสำหรับดึงโพสต์ทั้งหมด
const getPosts = async () => {
  return await api.get(API_URL);
};

// ฟังก์ชันสำหรับดึงโพสต์จาก ID
const getPostById = async (id) => {
  return await api.get(`${API_URL}/${id}`);
};

// ฟังก์ชันสำหรับลบโพสต์โดย ID
const deleteById = async (id) => {
  return await api.delete(`${API_URL}/${id}`);
};

// ฟังก์ชันสำหรับอัปเดตโพสต์
const updatePost = async (id, data) => {
  const response = await api.put(`${API_URL}/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data", // สำหรับการส่งไฟล์
    },
  });
  return response;
};

// รวมทุกฟังก์ชันใน PostService
const PostService = {
  createPost,
  getPosts,
  getPostById,
  deleteById,
  updatePost, // เพิ่มฟังก์ชัน updatePost
};

export default PostService;
