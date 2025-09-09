import React from 'react'
import {useForm} from "react-hook-form";
import {Link} from "react-router";
import {useSignUp} from "../../hooks/useSignUp.js";

export default function SignUp() {
    const {mutate: userSignUp, isPending} = useSignUp();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    
    const onSubmit = (data) => {
        userSignUp(data);
    };

    const password = watch("password");

    return (
        <div className={'flex flex-col items-center justify-center min-w-96 mx-auto'}>
            <div className={'w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'}>
                <h1 className={'text-3xl font-semibold text-center text-gray-300'}>
                    Sign Up <span className={'text-blue-500'}>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className={'mt-6'}>
                    {/* Full Name */}
                    <div className={'mb-4'}>
                        <label className={'label p-2'}>
                            <span className={'text-base label-text'}>Full Name</span>
                        </label>
                        <input
                            type={'text'}
                            placeholder={'Enter full name'}
                            className={'w-full input input-bordered h-10'}
                            {...register("fullName", {
                                required: "Full name is required",
                                minLength: {
                                    value: 2,
                                    message: "Full name must be at least 2 characters"
                                }
                            })}
                        />
                        {errors.fullName && (
                            <span className={'text-red-500 text-sm'}>{errors.fullName.message}</span>
                        )}
                    </div>

                    {/* Username */}
                    <div className={'mb-4'}>
                        <label className={'label p-2'}>
                            <span className={'text-base label-text'}>Username</span>
                        </label>
                        <input
                            type={'text'}
                            placeholder={'Enter username'}
                            className={'w-full input input-bordered h-10'}
                            {...register("username", {
                                required: "Username is required",
                                minLength: {
                                    value: 3,
                                    message: "Username must be at least 3 characters"
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9_]+$/,
                                    message: "Username can only contain letters, numbers, and underscores"
                                }
                            })}
                        />
                        {errors.username && (
                            <span className={'text-red-500 text-sm'}>{errors.username.message}</span>
                        )}
                    </div>

                    {/* Password */}
                    <div className={'mb-4'}>
                        <label className={'label p-2'}>
                            <span className={'text-base label-text'}>Password</span>
                        </label>
                        <input
                            type={'password'}
                            placeholder={'Enter password'}
                            className={'w-full input input-bordered h-10'}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                        />
                        {errors.password && (
                            <span className={'text-red-500 text-sm'}>{errors.password.message}</span>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className={'mb-4'}>
                        <label className={'label p-2'}>
                            <span className={'text-base label-text'}>Confirm Password</span>
                        </label>
                        <input
                            type={'password'}
                            placeholder={'Confirm password'}
                            className={'w-full input input-bordered h-10'}
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) =>
                                    value === password || "Passwords do not match"
                            })}
                        />
                        {errors.confirmPassword && (
                            <span className={'text-red-500 text-sm'}>{errors.confirmPassword.message}</span>
                        )}
                    </div>

                    {/* Gender */}
                    <div className={'mb-6'}>
                        <label className={'label p-2'}>
                            <span className={'text-base label-text'}>Gender</span>
                        </label>
                        <div className={'flex gap-4'}>
                            <div className={'form-control'}>
                                <label className={'label cursor-pointer gap-2'}>
                                    <span className={'label-text'}>Male</span>
                                    <input
                                        type={'radio'}
                                        value={'male'}
                                        className={'radio radio-primary'}
                                        {...register("gender", {
                                            required: "Please select a gender"
                                        })}
                                    />
                                </label>
                            </div>
                            <div className={'form-control'}>
                                <label className={'label cursor-pointer gap-2'}>
                                    <span className={'label-text'}>Female</span>
                                    <input
                                        type={'radio'}
                                        value={'female'}
                                        className={'radio radio-primary'}
                                        {...register("gender", {
                                            required: "Please select a gender"
                                        })}
                                    />
                                </label>
                            </div>

                            <div className={'form-control'}>
                                <label className={'label cursor-pointer gap-2'}>
                                    <span className={'label-text'}>Other</span>
                                    <input
                                        type={'radio'}
                                        value={'other'}
                                        className={'radio radio-primary'}
                                        {...register("gender", {
                                            required: "Please select a gender"
                                        })}
                                    />
                                </label>
                            </div>
                        </div>
                        {errors.gender && (
                            <span className={'text-red-500 text-sm'}>{errors.gender.message}</span>
                        )}
                    </div>

                    <Link
                        to={'/login'}
                        className={'text-sm hover:underline hover:text-blue-600 mt-2 inline-block'}
                    >
                        Already have an account?
                    </Link>

                    <div>
                        <button
                            type={'submit'}
                            className={'btn btn-block btn-sm mt-2 border border-slate-700'}
                            disabled={isPending}
                        >
                            {isPending ? "Creating Account..." : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
