import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Redirect, Route, Switch } from "react-router-dom";
import { Categories } from "../categories/Categories";
import { Goods } from "../goods/Goods";
import { Home } from "../home/Home";
import { useUserStore } from "../../utils/hooks/storeHooks";
import { Login } from "../auth/Auth";
import { Box, makeStyles, Modal, Theme } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import { AuthFallback } from "../auth/AuthFallback";
import { getUser } from "../../api/localStorage";
import { loginMe } from "../../api/api";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: indigo[100],
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));

export const Showcase: React.FC = observer(() => {
    const classes = useStyles();

    const userStore = useUserStore();

    const [synced, setSynced] = useState(false);

    const authGuard = useCallback(() => userStore.isLogged, [userStore]);

    const loader = <div>LOADING </div>;

    const LoginForm = React.forwardRef(() => <Login />);

    const showModal = useCallback(() => !userStore.isLogged && synced, [
        userStore,
        synced,
    ]);

    useEffect(() => {
        const login = async () => {
            const storageUser = getUser();
            if (storageUser) {
                try {
                    const response = await loginMe(storageUser);
                    if (response) {
                        userStore.loginUser({
                            id: response.id,
                            name: response.name,
                        });
                    }
                } catch (e) {
                    userStore.logoutUser();
                }
            } else {
                userStore.logoutUser();
            }
            setSynced(true);
        };

        login();
    }, []);

    const showFallback = useCallback(
        () => (synced ? <AuthFallback /> : loader),
        [synced]
    );

    return (
        <>
            <Modal open={showModal()} className={classes.modal}>
                <LoginForm />
            </Modal>
            <Box className={classes.root}>
                <Home />
                <Switch>
                    <Route
                        path="/categories"
                        render={() =>
                            authGuard() ? <Categories /> : showFallback()
                        }
                    />
                    <Route
                        path="/goods"
                        render={() =>
                            authGuard() ? <Goods /> : showFallback()
                        }
                    />
                    <Route
                        path="/"
                        render={() => <Redirect to="/categories" />}
                    />
                </Switch>
            </Box>
        </>
    );
});
