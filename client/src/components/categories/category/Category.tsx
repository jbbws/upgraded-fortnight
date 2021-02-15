import React from "react";
import { Category } from "../../../models/Category";
import { Box, Button, makeStyles, Theme } from "@material-ui/core";
import { lime } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: "10px 0px",
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(2),
        "&:hover": {
            boxShadow: ""
        },
        backgroundColor: lime[100],
    },
    info: {
        fontSize: theme.spacing(3),
        fontStyle: "bold",
    },
    actions: {
        display: "flex",
        justifyContent: "space-around",
        
        "& button:not(:last-child)": {
            marginRight: 5,
        }
    },
}));

export interface CategoryProps {
    category: Category;
}

export const CategoryItem: React.FC<CategoryProps> = ({ category }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root} boxShadow={4} borderRadius={10}>
            <Box className={classes.info}>{category.name}</Box>
            <Box className={classes.actions}>
                <Button variant="outlined" color="secondary">
                    Edit
                </Button>
                <Button variant="outlined">Total count</Button>
            </Box>
        </Box>
    );
};
