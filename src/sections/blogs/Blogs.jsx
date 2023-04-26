// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { Pagination } from "swiper";


import blogs from './data'
import Blog from "./Blog";
import './blogs.css'


const Blogs = () => {
  return (
    <section id="blogs">
      <h2>Recent Blogs</h2>
      <p>
        These are some of my recent thoughts or technical notes.
      </p>
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601: {slidesPerView: 2},
          1025: {slidesPerView: 3}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {
          blogs.map(blog => (
            <SwiperSlide key={blog.id}>
              <Blog blog={blog}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Blogs