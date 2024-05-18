import React, { useEffect, useState } from "react";
import "./career.css";
import CareerIcons from "../../assets/career.png";
import MetaData from "../../layout/MetaData";
import img2 from "../../assets/CAREER PAGE IMAGE.png";
const Career = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  // useEffect(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" })
  // })
  return (
    <>
      <MetaData titles={`Maxify Career`} />
      {/* serive banner */}
      <div className="element-banner service-banner">
        <img className="banner" src={img2} alt="jpg" />
        <div className="container-section">
          <div className="element-banner-content">
            <h1 className="heading-h1"> Join Our Team and Shape the Future</h1>
            <p className="para">Embark on a Journey of Innovation and Growth</p>
          </div>
        </div>
      </div>

      <div className="container-section mat-100">
        <div className="lg:w-[70%] md:w-[80%] sm:w-[100%]">
          <div className="border-line"></div>
          <h3 className="heading-h3">
            Maxify Web Solution - Your next career destination
          </h3>
          <p className="para">
            At Maxify, we believe in creating an environment where passion meets
            purpose, and talent thrives. As a leading player in the digital
            arena, we are constantly seeking driven individuals who are eager to
            make a difference and push the boundaries of innovation. Joining our
            team means being part of a dynamic and collaborative culture where
            creativity is celebrated, challenges are embraced, and opportunities
            for growth abound. If you're ready to embark on a journey of
            innovation and shape the future of technology, we invite you to
            explore career opportunities at Maxify Web Solutions.
          </p>
        </div>
        <div className="grid grid-cols-12  gap-4 mat-50">
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
              <img src={CareerIcons} alt="" />
              <h5 className="heading-h5">Innovative Projects</h5>
              <p className="para">
                Immerse yourself in a world of innovation. Our projects span a
                wide range of industries and technologies, providing you with
                the opportunity to work on cutting-edge solutions that challenge
                and inspire.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
              <img src={CareerIcons} alt="" />
              <h5 className="heading-h5">Collaborative Culture</h5>
              <p className="para">
                We believe in the power of collaboration to drive success. As
                part of our team, you'll work alongside passionate individuals
                who value teamwork, communication, and mutual respect. Together,
                we strive to create a supportive and inclusive environment where
                every voice is heard, and every idea is valued.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
              <img src={CareerIcons} alt="" />
              <h5 className="heading-h5">Growth Opportunities</h5>
              <p className="para">
                We're committed to helping our team members grow both personally
                and professionally. Whether you're looking to deepen your
                expertise in a specific area or take on new challenges, we offer
                a variety of opportunities for learning, development, and
                advancement.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
              <img src={CareerIcons} alt="" />
              <h5 className="heading-h5">Impactful Work</h5>
              <p className="para">
                Joining our team means making a real difference. From helping
                businesses streamline their operations to launching
                game-changing products, your work at Maxify Web Solutions will
                have a meaningful impact on the world around you.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
              <img src={CareerIcons} alt="" />
              <h5 className="heading-h5">Diverse Perspectives</h5>
              <p className="para">
                We believe that diversity drives innovation. That's why we
                embrace diversity and inclusion, welcoming individuals from all
                backgrounds and experiences. By bringing together people with
                diverse perspectives, we're able to tackle challenges from all
                angles and drive innovation forward.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="career-box">
              <img src={CareerIcons} alt="" />
              <h5 className="heading-h5">Work-Life Balance</h5>
              <p className="para">
                We believe in supporting and maintaining a healthy work-life
                balance. That's why we offer a supportive environment that
                prioritizes well-being. Joining our team means enjoying the
                freedom to live your best life, both inside and outside of the
                office.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-section mat-100">
        <div className="job-section">
          <div className="wrapper">
            <div className="accordion">
              <p className=" " style={{ fontSize: "25px" }}>
                Current Opening
              </p>
              <div className="border-line "></div>
              <div className="mt-5"></div>
              {jobData.map((item, i) => (
                <div className="item " key={i}>
                  <div className="title" onClick={() => toggle(i)}>
                    <h2>{item.title}</h2>
                    <span>{selected === i ? "-" : "+"}</span>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    <ul>
                      <li>
                        <b>Requi#525CEB Qualifications</b> :{" "}
                        <span>{item.qualification}</span>{" "}
                      </li>
                      <li>
                        <b>Experience Requi#525CEB</b> :{" "}
                        <span>{item.experience}</span>{" "}
                      </li>
                      <li>
                        <b>Job type</b> : <span>{item.jobType}</span>{" "}
                      </li>
                      <li>
                        <b>Job Role</b> : <span>{item.jobRole}</span>{" "}
                      </li>
                      <li>
                        <b>Skill needed for the job role</b> :{" "}
                        <span>
                          <div>
                            {item?.skillsData?.map((data, i) => (
                              <span className="skills" key={i}>
                                {data.skill}
                              </span>
                            ))}
                          </div>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;

const jobData = [
  {
    title: "Web Developer",
    qualification: "Graduate",
    experience: "2-4 Years",
    jobType: "Full  Time",
    jobRole: "Mern Stack",
    skillsData: [
      {
        skill: "PHP",
      },
      {
        skill: "HTML",
      },
      {
        skill: "CSS",
      },
      {
        skill: "JAVASCRIPT",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    qualification: "Graduate",
    experience: "2-4 Years",
    jobType: "Full  Time",
    jobRole: "Mern Stack",
    skillsData: [
      {
        skill: "PHP",
      },
      {
        skill: "HTML",
      },
      {
        skill: "CSS",
      },
      {
        skill: "JAVASCRIPT",
      },
      {
        skill: "REACT JS",
      },
      {
        skill: "NODE JS",
      },
      {
        skill: "MONGODB",
      },
    ],
  },
];
