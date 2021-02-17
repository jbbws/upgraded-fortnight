import { CategoriesStore } from "./categories/categoriesStore";
import { GoodsStore } from "./goods/goodsStore";
import { UserStore } from "./user/userStore";

export interface RootStore {
    goods: GoodsStore;
    categories: CategoriesStore;
    user: UserStore;
    overlay: any
}

export class RootStore implements RootStore {
    constructor() {
        this.categories = new CategoriesStore();
        this.goods = new GoodsStore();
        this.user = new UserStore();
    }
}
