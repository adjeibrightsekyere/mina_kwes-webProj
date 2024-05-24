import { useState } from "react";
import { NavLink } from "react-router-dom";
import face from "../assets/face.png"
import google from "../assets/google.png"
import email from "../assets/email.png"
import lock from "../assets/lock.png"


function SignIn() {
    const [values, setValues] = useState({

        email: "",
        password: ""

    })
    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className="flex h-screen">
            <div className=" w-1/2 p-4  pl-16 ">
                <div className="flex font-bold mb-10  text-3xl">
                    <h1 className="">Rina's</h1>
                    <h1 className="flex ml-2 text-blue-400">Imports</h1>
                </div>

                <form onSubmit={handleSubmit} className="pt-6">
                    <div className="flex gap-6">
                        <NavLink className="flex border rounded-full w-60 h-10 content-center pl-8  shadow-lg">
                            <img src={face} alt="" className="w-8 h-6 mt-1 pr-2" />
                            <h2 className="mt-1  pr-3">Sign In with facebook</h2>
                        </NavLink>
                        <NavLink className="flex border rounded-full w-60 h-10 content-center pl-8 shadow-lg">
                            <img src={google} alt="" className="w-8 h-6 mt-1 pr-2" />
                            <h2 className="mt-1  pr-3">Sign In with Google</h2>
                        </NavLink>
                    </div>
                    <div className="flex gap-4 mt-4 pr-16 mr-10 justify-center">
                        <div className="border w-28 h-0 mt-3"></div>
                        <div>
                            <h1>Or</h1>
                        </div>
                        <div className="border w-28 h-0 mt-3 "></div>
                    </div>
                    <div>


                        <label className="pl-2 font-light font-sans"><b>Email-Address</b></label>
                        <div className="flex border rounded-full w-96 h-10 shadow-lg content-center pl-16 mt-4 ">
                            <img src={email} alt="" className="w-8 h-6 mt-2 pr-2" />
                            <input type="email" placeholder="paakwasisensor@gmail.com" value={values.email} name="email" onChange={handleChange}
                                className="focus:outline-none  w-full"
                            />
                        </div>

                        <label className="pl-2 font-light font-sans"><b>Password</b></label>
                        <div className="flex border rounded-full w-96 h-10 shadow-lg content-center pl-16 mt-3 ">
                            <img src={lock} alt="" className="w-8 h-6 mt-1 pr-2" />
                            <input type="password" placeholder="********" value={values.password} name="password" onChange={handleChange}
                                className="focus:outline-none w-full"
                            />
                        </div>

                        <div className="flex">
                            <button type="submit" className="border rounded-full shadow-lg w-60 h-10 mt-6 bg-slate-400 font-extrabold font-mono text-lg ">
                                Sign In
                            </button>
                            <h1 className="mt-8 pl-32">Forgot password?</h1>
                        </div>
                        <NavLink to='/Signup'>
                            <h1 className="mt-6">Do not have an account?</h1>
                        </NavLink>

                    </div>
                </form>
            </div>

            <div className="w-1/2 bg-gray-900 text-white">
                <div className="p-24 pt-64">
                    <h1 className="text-6xl font-extrabold font-serif">Welcome to<br />Rina's Import</h1>
                    <h2 className="pt-6 font-light">Our platform is design to provide customers with the convinience<br />
                        of shopping from their comfort zones without sacrifing quality or<br />
                        selection.<br />
                        Our selection is updated regularly, so customers alwalys find the<br />
                        latest trends and fashions.
                    </h2>
                </div>
            </div>
        </div>
    )
} export default SignIn;