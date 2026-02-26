import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import type { LoginValuesProps } from "../types/login";
import { validateLogin } from "../utils/validateFields";
import { useUser } from "../context/UserContext";

const initialValues: LoginValuesProps = {
    email: "",
    password: "",
}

const Login = () => {
    const [error, setError] = useState<string | null>(null);
    const context = useUser();
    const navigate = useNavigate();

    const handleSubmit = (values: LoginValuesProps) => {
        if (context?.userData?.email === values.email && context?.userData.password === values.password) {
            alert("Login Successful");
            navigate("/");
        } else {
            setError("Invalid email or password");
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
            <div className="w-full p-8 max-w-md bg-white rounded-2xl border border-neutral-200 space-y-6">
                <h1 className="text-xl sm:text-2xl text-center font-extrabold">Welcome Back</h1>

                <Formik
                    initialValues={initialValues}
                    validate={validateLogin}
                    validateOnBlur={false}
                    validateOnChange={false}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="flex flex-col gap-4">
                            <InputField
                                label="Email"
                                name="email"
                                type="email"
                            />
                            <InputField
                                label="Password"
                                name="password"
                                type="password"
                            />

                            <div className="mt-2">
                                <Button
                                    label="Login"
                                    type="submit"
                                />
                            </div>
                        </Form>
                    )}
                </Formik>

                {error ? (
                    <div className="text-sm text-red-500 text-center">{error}</div>
                ) : null}

                <p className="text-sm sm:text-base text-center text-neutral-500">
                    Don't have an account?&nbsp;
                    <Link to="/signup" className="text-sky-800 font-semibold hover:underline">
                        Signup
                    </Link>
                </p>
            </div>
        </main>
    )
}

export default Login;