"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type TInput = {
    fullName: string;
    email: string;
    zipCode: number;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<TInput>();
    const [confirmPassError, setConfirmPassError] = useState('');
    const handleRegister = (data: TInput) => {
        if (data.confirmPassword !== data.password) {
            setConfirmPassError('Confirm Password is not matched!');
            return;
        }

        setConfirmPassError('');
        
        console.log(data);
    }
    console.log(errors);

  
    return (
        <form onSubmit={handleSubmit(handleRegister)} className="form md:max-w-2xl">
            <h1 className="form-title">Register</h1>

            <div className="flex flex-col gap-y-7">
                <div className="form-control">
                    <label htmlFor="full-name">Full Name</label>
                    <input {...register('fullName', {required: 'Full Name is required'})} type="text" placeholder="Enter your full name" id="full-name" className="input" />

                    {errors.fullName?.message && <p className="error">{errors.fullName.message}</p>}
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input {...register('email', { required: 'Email is required' })} type="email" placeholder="Enter your email" id="email" className="input" />
                    
                    {errors.email?.message && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-control">
                    <label htmlFor="zip-code">Zip Code</label>
                    <input {...register('zipCode', { required: 'Zip Code is required' })} type="number" placeholder="Enter zip code" id="zip-code" className="input" />
                    
                    {errors.zipCode?.message && <p className="error">{errors.zipCode.message}</p>}
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input {...register('password', {required: 'Password is required', minLength: {value:8, message:'Minimum length 8 characters'}})} type="password" className="input" placeholder="Enter strong password" id="password"/>

                    {errors.password?.message && <p className="error">{errors.password.message}</p>}
                </div>

                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input {...register('confirmPassword', {required: 'Confirm Password is required'})} type="password" className="input" placeholder="Enter confirm password" id="password"/>

                    {errors.confirmPassword?.message && <p className="error">{errors.confirmPassword.message}</p>}
                    {confirmPassError && <p className="error">{ confirmPassError}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex flex-col">
                    <button type="submit" className="btn btn-primary">Register</button>

                    <p className="flex justify-center gap-x-2 mt-3">
                        <span>Already have an account?</span> <Link href={'/login'} className="underline text-blue-600">Login</Link>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default Register;