import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "./Signup";

const renderComponent = () => {
    render(
        <BrowserRouter>
            <Signup />
        </BrowserRouter>
    )
}

beforeEach(() => {
    renderComponent();
});

describe("Test Signup Component", () => {
    it("should render signup form correctly", () => {
        expect(screen.getByText("Create an account")).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: "Full Name" })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
    });
})