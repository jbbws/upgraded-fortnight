import React, { useState } from "react";
import {
    Box,
    Button,
    makeStyles,
    Paper,
    TextField,
    Theme,
} from "@material-ui/core";
import { loginUser } from "../../api/api";
import { observer } from "mobx-react-lite";
import { useUserStore } from "../../utils/hooks/storeHooks";
import { setUser } from "../../api/localStorage";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: 400,
        height: 300,
    },
    paper: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(3),
    },
    form: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    fields: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textField: {
        marginBottom: 20,
        minWidth: 300,
    },
}));

export const Login: React.FC = observer(() => {
    const classes = useStyles();

    const [login, setLogin] = useState("");
    const [pwd, setPwd] = useState("");

    const user = useUserStore();

    const onLogin = async () => {
        const response = await loginUser({ login, password: pwd });
        if (response) {
            user.loginUser({ id: response.id, name: response.name });
            setUser(response.login);
        }
    };

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper} elevation={2}>
                <form className={classes.form} noValidate autoComplete="off">
                    <Box className={classes.fields}>
                        <h4>Login form</h4>
                        <TextField
                            id="login"
                            label="Login"
                            variant="outlined"
                            className={classes.textField}
                            value={login}
                            onChange={(event) => setLogin(event.target.value)}
                        />
                        <TextField
                            id="pwd"
                            label="Password"
                            variant="outlined"
                            className={classes.textField}
                            value={pwd}
                            onChange={(event) => setPwd(event.target.value)}
                        />
                    </Box>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={onLogin}
                        disabled={!login || !pwd}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </Box>
    );
});
