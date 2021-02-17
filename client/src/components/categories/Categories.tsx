import { Box, makeStyles, Paper, Theme } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useCategoriesStore } from "../../utils/hooks/storeHooks";
import { CategoryItem } from "./category/CategoryItem";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    paper: {
        flex: 1,
        padding: theme.spacing(1),
    },
}));

export const Categories: React.FC = observer(() => {
    const store = useCategoriesStore();
    const classes = useStyles();

    useEffect(() => {
        store.setList([
            {
                name: "Test",
                id: 1,
            },
            {
                name: "Test 2",
                id: 2,
            },
            {
                name: "Test 3",
                id: 3,
            },
        ]);
    }, []);

    return (
        <Box width={1} height={1} className={classes.root}>
            <Box height={0.9} width={0.75}>
                {store.list.map((item) => (
                    <CategoryItem key={item.id} category={item} />
                ))}
            </Box>
        </Box>
    );
});
