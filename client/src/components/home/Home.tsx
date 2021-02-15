import React, { useState } from "react";
import {
    Box,
    makeStyles,
    Theme,
    BottomNavigation,
    BottomNavigationAction,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import StoreIcon from "@material-ui/icons/Store";
import CategoryIcon from "@material-ui/icons/Category";
import { Profile } from "./Profile";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(1),
        backgroundColor: "transparent",
    },
    profile: {
        position: "absolute",
        left: 0,
    },
}));

enum SectionType {
    Categories = "categories",
    Goods = "goods",
}

export const Home: React.FC = () => {
    const history = useHistory();
    const classes = useStyles();

    const navigate = (section: SectionType) => {
        history.push(`/${section}`);
    };

    const [state, setState] = useState<SectionType>(SectionType.Categories);

    return (
        <Box>
            <Box className={classes.profile}>
                <Profile />
            </Box>
            <BottomNavigation
                value={state}
                onChange={(_, newValue: SectionType) => {
                    setState(newValue);
                    navigate(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    label="Categories"
                    value={SectionType.Categories}
                    icon={<CategoryIcon />}
                />
                <BottomNavigationAction
                    value={SectionType.Goods}
                    label="Goods"
                    icon={<StoreIcon />}
                />
            </BottomNavigation>
        </Box>
    );
};
