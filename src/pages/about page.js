import React from "react";
import Nav from "../components/navbar";
import AboutImage from '../assets/AboutImage.png'

function About() {
    return (
        <div className="h-screen overflow-hidden overflow-y-hidden">
            <Nav />
            <div className="flex h-screen  bg-gray-900">
                <div className="w-1/2">
                    <img src={AboutImage} alt="" />
                    <div className="flex gap-6 justify-end pt-0 pl-24 ">
                        <div className="border rounded-lg shadow-md shadow-white h-32 w-56 bg-indigo-900 p-6 text-white">
                            <div>
                                <img src="" alt="" />
                                <h1>Call us...</h1>
                            </div>
                            <h2>0502052267</h2>
                            <h2>0203180263</h2>
                        </div>
                        <div className="border rounded-lg shadow-md shadow-white h-32 w-56 bg-blue-400 pl-6 pt-4 text-white">
                            <div>
                                <img src="" alt="" />
                                <h1>LOCATION...</h1>
                            </div>
                            <h2>MAIN BRANCH:</h2><h2>KNUST CAMPUS</h2>
                            <h2>ALL CAMPUSES IN GHANA</h2>
                        </div>
                       
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="text-white p-4 pt-4">
                        <h1 className=" text-8xl font-bold">About Us</h1>
                        <h2 className="mt-4 text-xl font-light">
                            Are you looking for affordable and efficient product? Look no further!<br />
                            Rina’s Hub offers a wide selection of dresses,bags,shoes, and<br />
                            electrical appliances at unbeatable prices. Our products are design<br />
                            with the modern classes of people in mind, making them the perfect<br />
                            addition to any wardrobe or room.<br />
                            Our platform is design to provide customers with the convenience<br />
                            of shopping from their comfort zones without sacrificing quality or<br />
                            selection.<br />
                            Our selection is updated regularly, so customers always find the<br />
                            latest trends and fashions.
                        </h2>
                    </div>
                    <div className=" pt-4 pl-8 ">
                        <div className="border rounded-lg shadow-md shadow-white h-32 w-56 bg-green-500 p-6 text-white">
                            <div>
                                <img src="" alt="" />
                                <h1>HOURS...</h1>
                            </div>
                            <h2>MON-SUN..6AM-6PM</h2>
                            <h2>DELIVERY:MON-SAT..10AM-5PM</h2>
                        </div>
                       
                       
                    </div>
                </div>

            </div>

        </div>
    )
}
export default About;