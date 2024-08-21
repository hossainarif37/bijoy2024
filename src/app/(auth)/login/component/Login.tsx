"use client"

import { Button, ConfigProvider, Input, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <form className="form">
            <h1 className="form-title">Login</h1>

            {/* Email */}
            <div className="flex flex-col gap-y-7">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Input placeholder="Enter your email" id="email" className="input" />

                </div>

                {/* Password */}
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <Input.Password
                        className="input"
                        placeholder="Enter your password"
                        visibilityToggle={{
                            visible: passwordVisible,
                            onVisibleChange: setPasswordVisible,
                        }}
                    />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col">
                    <button type="submit" className="btn btn-primary">Login</button>

                    <p className="flex justify-end gap-x-2 mt-3">
                        <span>Don't have an account?</span> <Link href={'/register'} className="underline text-blue-600">Register</Link>
                    </p>

                </div>

                    {/* Separator */}
                    <div className="w-[88%] mx-auto h-[1px] bg-gray-300 opacity-50"></div>
                <div>
                    <button type="button" className="btn border flex justify-center gap-x-5 item-center text-black-100">
                        <Image src={'/google_icon.png'} alt="Google Icon" width={24} height={24} />

                        <span>Continue with google</span>
                    </button>
                </div>

            </div>
        </form>
    );
};

export default Login;