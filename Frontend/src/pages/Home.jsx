import { useState, useEffect } from "react";
import PostService from "../services/post.service";
import Swal from "sweetalert2";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await PostService.getPosts();
        if (response.status === 200) {
          // เพิ่มการตรวจสอบว่า response.data เป็น array หรือไม่
          if (Array.isArray(response.data)) {
            setPosts(response.data);
          } else {
            Swal.fire({
              title: "Home",
              text: "Received data is not an array.",
              icon: "error",
            });
          }
        }
      } catch (error) {
        Swal.fire({
          title: "Home",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-6">
        {/* ตรวจสอบว่ามี posts หรือไม่ก่อนการใช้ map() */}
        {posts && posts.length > 0 ? (
          posts.map((post, index) => {
            return <Post key={index} {...post} />;
          })
        ) : (
          <p>No posts available</p> // ถ้าไม่มีโพสต์ก็แสดงข้อความนี้
        )}
      </div>
    </>
  );
};

export default Home;
