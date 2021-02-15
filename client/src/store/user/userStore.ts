import { action, makeObservable, observable } from "mobx";
import { User } from "../../../../shared/models/user/User";
import { AppUser } from "../../models/User";

const guest: AppUser = {
    id: -1,
    name: "Guest",
    isLogged: false,
};

export class UserStore implements AppUser {
    @observable id: number = guest.id;
    @observable name: string = guest.name;
    @observable isLogged: boolean = guest.isLogged;

    @action
    loginUser(user: User) {
        this.isLogged = true;
        this.name = user.name;
        this.id = user.id;
    }

    @action
    logoutUser() {
        this.isLogged = false;
        this.id = guest.id;
        this.name = guest.name;
    }

    login: string = "";

    constructor() {
        makeObservable(this);
    }
}
