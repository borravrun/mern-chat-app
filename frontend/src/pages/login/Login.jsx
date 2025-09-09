import React from 'react'
import {useForm} from "react-hook-form";
import {Link} from "react-router";
import useLogin from "../../hooks/useLogin.js";

export default function Login() {
    const { mutate: userLogin, isPending } = useLogin();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        userLogin(data)
    };

    return (
        <div className={'flex flex-col items-center justify-center w-96 mx-auto'}>
            <div className={'w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'}>
                <h1 className={'text-3xl font-semibold text-center text-gray-300'}>
                    Login
                    <span className={'text-blue-500'}> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className={'mt-6'}>
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
                    <div className={'mb-6'}>
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

                    <Link
                        to={'/signup'}
                        className={'text-sm hover:underline hover:text-blue-600 mt-2 inline-block'}
                    >
                        Don't have an account?
                    </Link>

                    <div>
                        <button
                            type={'submit'}
                            className={'btn btn-block btn-sm mt-2 border border-slate-700'}
                            disabled={isPending}
                        >
                            {isPending ? "Loading..." : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
