import { action, makeObservable, observable } from "mobx";
import { Category } from "../../models/Category";

export interface CategoriesStore {
    list: Category[];
}

export class CategoriesStore implements CategoriesStore {
    @observable list: Category[] = [];

    @action 
    setList(list: Category[]) {
        this.list = list;
    }
    
    constructor() {
        makeObservable(this);
    }
}
