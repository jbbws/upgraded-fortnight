export const getUser = (): string => {
    return localStorage.getItem("user") ?? "";
};

export const setUser = (token: string): void => {
    localStorage.setItem("user", token);
};
