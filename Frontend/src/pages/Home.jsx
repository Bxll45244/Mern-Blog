const Home = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://www.blognone.com/sites/default/files/externals/ed39fe7a1d91ef6f0849fab4e0c3ce1f.jpeg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          ซีอีโอรักษาการณ์ Intel บอก ซีอีโอคนใหม่ต้องมีพื้นฐานในกระบวนการผลิตชิป
        </h2>
        <p>
          หลังจากอินเทลได้ตัดสินใจปลดซีอีโอ Pat Gelsinger ออกจากตำแหน่ง
          ประเด็นหนึ่งที่หลายคนกังวลคือซีอีโอคนใหม่
          อาจเน้นไปที่การตลาดหรือการเงิน แตกต่างจาก Gelsinger
          ที่มีพื้นฐานจากสายวิศวกรรม (Bob Swan ซีอีโอคนก่อนหน้า Gelsinger
          มาจากสายการเงิน) อย่างไรก็ตามอินเทลก็ดูจะทราบความกังวลนี้
        </p>
      </div>
    </div>
  );
};

export default Home;
