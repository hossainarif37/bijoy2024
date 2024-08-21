"use client"

import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <form className="form md:max-w-xl">
            <h1 className="form-title">Register</h1>

            <div className="flex flex-col gap-y-7">
                <div className="form-control">
                    <label htmlFor="full-name">Full Name</label>
                    <Input placeholder="Enter your full name" id="full-name" className="input" />
                </div>

                {/* Email */}
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Input placeholder="Enter your email" id="email" className="input" />
                </div>

                <div className="form-control">
                    <label htmlFor="zip-code">Zip Code</label>
                    <Input type="number" placeholder="Enter zip code" id="zip-code" className="input" />
                </div>

                {/* Password */}
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <Input.Password
                        className="input"
                        placeholder="Enter strong password"
                        visibilityToggle={{
                            visible: passwordVisible,
                            onVisibleChange: setPasswordVisible,
                        }}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <Input.Password
                        className="input"
                        placeholder="Enter confirm password"
                        visibilityToggle={{
                            visible: confirmPasswordVisible,
                            onVisibleChange: setConfirmPasswordVisible,
                        }}
                    />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col">
                    <button type="submit" className="btn btn-primary">Register</button>

                    <p className="flex justify-end gap-x-2 mt-3">
                        <span>Already have an account?</span> <Link href={'/login'} className="underline text-blue-600">Login</Link>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default Register;