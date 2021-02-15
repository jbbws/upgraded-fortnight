import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { useGoodsStore } from "../../utils/hooks/storeHooks";
import { observer } from "mobx-react-lite";

export const Goods: React.FC = observer(() => {
    const store = useGoodsStore();

    useEffect(() => {
        store.setList([
            {
                name: "Good",
                id: 1,
                categoryId: 0,
            },
            {
                name: "Good 2",
                id: 2,
                categoryId: 0,
            },
            {
                name: "Good 3",
                id: 3,
                categoryId: 0,
            },
        ]);
    }, []);

    return (
        <Box>
            {store.list.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </Box>
    );
});
