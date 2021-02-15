import { action, makeObservable, observable } from "mobx";
import { Good } from "../../models/Good";

export interface GoodsStore {
    list: Good[];
}

export class GoodsStore implements GoodsStore {
    @observable list: Good[] = [];

    @action
    setList(list: Good[]) {
        this.list = list;
    }
    
    constructor() {
        makeObservable(this);
    }
}
