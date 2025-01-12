import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import PostService from "../services/post.service";
import Editor from "../components/Editor";

const Edit = () => {
  const { id } = useParams(); // ดึง id ของโพสต์จาก URL
  const navigate = useNavigate();
  const [postDetail, setPostDetail] = useState({
    title: "",
    summary: "",
    content: "",
    file: null,
  });
  const [content, setContent] = useState("");

  // โหลดข้อมูลโพสต์จาก API
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await PostService.getPostById(id); // ต้องเขียน method ใน PostService สำหรับดึงข้อมูล
        setPostDetail({
          title: response.data.title,
          summary: response.data.summary,
          content: response.data.content,
          file: null, // ไม่จำเป็นต้องโหลดไฟล์กลับมา
        });
        setContent(response.data.content); // โหลด content เข้า editor
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    getPost();
  }, [id]);

  // การเปลี่ยนแปลงในฟอร์ม
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "file") {
      setPostDetail({ ...postDetail, [name]: e.target.files[0] });
    } else {
      setPostDetail({ ...postDetail, [name]: value });
    }
  };

  const handleContentChange = (value) => {
    setContent(value);
    setPostDetail({ ...postDetail, content: value });
  };

  // การส่งข้อมูลเพื่ออัปเดตโพสต์
  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.set("title", postDetail.title);
      data.set("summary", postDetail.summary);
      data.set("content", postDetail.content);
      data.set("file", postDetail.file); // หากมีการอัปโหลดไฟล์ใหม่

      const response = await PostService.updatePost(id, data); // ต้องเขียน method ใน PostService สำหรับการอัปเดตโพสต์
      if (response.status === 200) {
        Swal.fire({
          title: "Update Post",
          text: "Post updated successfully",
          icon: "success",
        }).then(() => {
          navigate(`/post/${id}`); // เปลี่ยนเส้นทางไปที่หน้ารายละเอียดโพสต์
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Update Post",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Edit Post
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={postDetail.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Summary</label>
          <input
            type="text"
            name="summary"
            value={postDetail.summary}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <div className="h-64">
            <Editor value={content} onChange={handleContentChange} />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Update Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
