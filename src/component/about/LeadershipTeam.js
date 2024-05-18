import React from 'react'
import AboutCompanyImg from "../../assets/welcome-img.jpg"
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import IndiaLogo from '../../assets/india-logo.jpg'
import Profile from '../../assets/profile.jfif'
import MetaData from '../../layout/MetaData';
import img2 from '../../assets/leadership image.jpg'
const LeadershipTeam = () => {
    return (
        <>
            <MetaData titles={`Maxify Industries Leadership Team`} />
            {/* banner */}
            <div className="element-banner about-company-banner"><img className="banner" src={img2} alt="jpg" />
                <div className="container-section">
                    <div className="element-banner-content">
                        <h1 className="text-heading-h1">Powering Great Ideas, Driving Excellence Through Our Solutions</h1>
                    </div>
                </div>
            </div>


            <div className="container-section-2 mat-100">
                <div className="grid grid-cols-12  gap-4">
                    <div className='lg:col-span-6 md:col-span-12 sm:col-span-12'>
                        <div className="element-container">
                            <div className="border-line"></div>
                            <h3 className="heading-h3 ">Meet our team</h3>
                            <p className="para mt-6">The leadership team at Maxify Web Solutions embodies a rich tapestry of experience, expertise, and vision, driving the company forward with unwavering dedication and a relentless pursuit of excellence. Each member brings a unique set of skills and perspectives to the table, creating a dynamic and collaborative environment that fosters innovation and growth. Together, the leadership team at Maxify Web Solutions is dedicated to pushing the boundaries of what's possible in the digital realm, delivering innovative solutions that empower businesses to thrive in an ever-changing landscape. With a focus on collaboration, creativity, and customer satisfaction, they are leading the charge towards a brighter, more connected future, one breakthrough at a time.</p>

                        </div>
                    </div>
                    {/* <!-- ... --> */}
                    <div className='lg:col-span-6 md:col-span-12 sm:col-span-12'>
                        <div className="element-container">
                            <div className="img-box about-leadership-main">
                                <img src={AboutCompanyImg} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-section-2 mat-100">
                <h4 className="text-heading-h4 left-line">Management Team</h4>
                <div className="grid grid-cols-12  gap-4 mat-50">
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12'>
                        <div className="leadership-box">
                            <img src={Profile} alt="" className='profiles-img' />
                            <div className="content">
                                <p className="para"><b>Rameshwar Vyas</b></p>
                                <p className="para">Chief Executive Officer</p>
                                <div className="leader-loaction">
                                    <img src={IndiaLogo} alt="" />
                                    <Link href=""><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeadershipTeam
