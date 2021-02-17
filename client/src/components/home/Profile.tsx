import { Box, makeStyles, Theme } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import { useUserStore } from "../../utils/hooks/storeHooks";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    login: {
        transform: "scaleX(-1)",
    },
}));
export const Profile: React.FC = observer(() => {
    const userStore = useUserStore();
    const classes = useStyles();

    const logged = userStore.isLogged;

    return (
        <Box className={classes.root} width={120}>
            <Box
                className={classes.container}
                width={1}
                height={40}
                border={1}
                borderRadius={5}
                px={1}
            >
                <Box fontSize={16}>{userStore.name}</Box>
                <ExitToAppIcon
                    color={userStore.isLogged ? "secondary" : "primary"}
                    className={userStore.isLogged ? "" : classes.login}
                />
            </Box>
        </Box>
    );
});
