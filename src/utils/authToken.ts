import Cookies from "js-cookie";

export const setAuthToken = (token: string): void => {
    Cookies.set("token", token, {
        path: "/",
        expires: 2,
        sameSite: "Strict",
    });
};

export const getAuthToken = (): string | undefined => {
    return Cookies.get("token");
};

export const removeAuthToken = (): void => {
    Cookies.remove("token");
}