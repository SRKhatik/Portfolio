import React from "react";
import "./Works.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import work2 from "../../img/hni-2.png";
import work1 from "../../img/free.jpg";
import work3 from "../../img/sai.png";
import work4 from "../../img/thepixeledge.jpg";
import work5 from "../../img/vmart.jpg";
import work6 from "../../img/pure_logo.jpeg";
import { useContext } from "react";
import { themeContext } from "../../Context";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: work6,
      heading: "Pure Cosmeceuticals Pvt. Ltd",
      review:
        "Since September 2024, I have been working full-time remotely at Pure Cosmeceuticals Pvt. Ltd as a Shopify Developer, specializing in theme development, as well as frontend and backend development. My role focuses on creating and optimizing Shopify e-commerce websites to deliver seamless user experiences and superior performance. I collaborate with cross-functional teams to implement innovative features, customize functionalities, and ensure scalable solutions, driving client success and boosting online sales",
    },
    {
      img: work4,
      heading: "ThePixelEdge",
      review:
        "From June 2023 to September 2024, I worked full-time at ThePixelEdge in a hybrid role as a Shopify Theme Developer. I specialized in designing and optimizing Shopify e-commerce websites, delivering seamless user experiences and enhanced performance. Collaborating with teams, I implemented innovative features to drive client success and increase sales.",
    },
    {
      img: work1,
      heading: "Freelance Work",
      review:
        "I actively pursue frontend and backend expertise as a student and freelancer to improve my skills. I gain real expertise in creating reliable and responsive web applications by taking on a variety of assignments. I am committed to delivering exceptional results and staying updated with the latest industry trends.",
    },
    {
      img: work5,
      heading: "V-MART HINGANGHAT",
      review:
        "Launched and developed VMART, an online grocery business providing door-to-door service.Designed and built the e-commerce website from scratch, ensuring a user-friendly interface and seamless shopping experience.Managed all aspects of the start-up, including marketing, operations, customer service and logistics.",
    },
    {
      img: work2,
      heading: "HNI Office India LTD.Nagpur",
      review:
        "As a Front-end Developer with a solid foundation in HTML, Bootstrap, CSS, JavaScript and jQuery. I have successfully developed responsive and interactive web applications.I possess strong debugging skills and a knack for optimizing code to enhance performance. As a collaborative team player, I effectively communicate and contribute to project success.",
    },
    {
      img: work3,
      heading: "Computer Teacher",
      review:
        "Computer Teacher at Sai Ambrosia Computer Education, imparting knowledge and skills for 1 year. Guiding students to Ms office in computer education,My extensive knowledge of Excel, Powerpoint, and other programmes allows me to improve my teaching abilities as a computer teacher.",
    },
  ];
  return (
    <div className="t-wrapper" id="work">
      <div className="t-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Working </span>
        <br />
        <span> Experience</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{ color: darkMode ? "black" : "" }}>
                  {client.heading}
                </span>
                <span style={{ color: darkMode ? "white" : "" }}>
                  {client.review}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Works;
