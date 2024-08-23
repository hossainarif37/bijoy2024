"use client"

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type TInput = {
    email: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<TInput>();

    const handleLogin = (data: TInput) => {
        console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(handleLogin)} className="form md:max-w-xl">
            <h1 className="form-title">Login</h1>

            <div className="flex flex-col gap-y-7">
                {/* Email */}
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input {...register('email', { required: 'Email is required' })} type="email" placeholder="Enter your email" id="email" className="input" />

                    {errors?.email?.message && <p className="error">{errors?.email?.message}</p>}
                </div>

                {/* Password */}
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Minimum length 8 characters' } })} type="password" className="input" placeholder="Enter strong password" id="password" />

                    {errors?.password?.message && <p className="error">{errors?.password?.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex flex-col">
                    <button type="submit" className="btn btn-primary">Login</button>

                    <p className="flex justify-end gap-x-2 mt-3">
                        <span>Don't have an account?</span> <Link href={'/register'} className="underline text-blue-600">Register</Link>
                    </p>

                </div>

                {/* Separator */}
                <div className="flex justify-center items-center gap-x-2">
                    <div className="w-full h-[1px] bg-gray-300 opacity-50"></div>
                    <span className="mx-2">Or</span>
                    <div className="w-full h-[1px] bg-gray-300 opacity-50"></div>
                </div>
                <div>
                    <button type="button" className="btn border flex justify-center gap-x-5 item-center text-black-100">
                        <Image src={'/google_icon.png'} alt="Google Icon" width={24} height={24} />

                        <span>Continue with google</span>
                    </button>
                </div>

            </div>
        </form >
    );
};

export default Login;