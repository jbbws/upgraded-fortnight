import { createContext } from "react";
import { RootStore } from "../store/rootStore";

export const RootContext = createContext<RootStore>(new RootStore());
