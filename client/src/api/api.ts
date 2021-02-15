import {
    LoginRequestDto,
    LoginResponseDto,
} from "../../../shared/dtos/login/LoginDto";
import { post } from "./fetch";

export const loginUser = async (
    data: LoginRequestDto
): Promise<LoginResponseDto | false | null> => {
    const url = `/auth/login`;
    try {
        const result = await post<LoginResponseDto>(url, data);
        if (!result) {
            return false;
        }
        return result;
    } catch (e) {
        return null;
    }
};

export const loginMe = async (token: string) => {
    const url = `/auth/me`;
    try {
        const result = await post<LoginResponseDto>(url, { token });
        if (!result) {
            return false;
        }
        return result;
    } catch (e) {
        return null;
    }
};
