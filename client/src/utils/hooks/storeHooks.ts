import { useContext } from "react";
import { RootContext } from "../../context/RootContext";

export const useCategoriesStore = () => {
    return useContext(RootContext).categories;
};

export const useGoodsStore = () => {
    return useContext(RootContext).goods;
};

export const useUserStore = () => {
    return useContext(RootContext).user;
};
