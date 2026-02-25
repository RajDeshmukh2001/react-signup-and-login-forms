import type { SignupValuesProps } from "../types/signup";

export const validateSignup = (values: SignupValuesProps) => {
    const errors: Partial<SignupValuesProps> = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.name) {
        errors.name = "Name is required";
    }

    if (!values.email) { 
        errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Enter a valid email address"
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Please confirm your password";
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}