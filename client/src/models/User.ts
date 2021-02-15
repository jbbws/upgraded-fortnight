import { User } from "../../../shared/models/user/User";

export interface AppUser extends User {
    isLogged: boolean;
    // login: string;
}
