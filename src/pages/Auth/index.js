import { useState } from "react";
import { auth, googleProvider } from "../../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  Box,
  CircularProgress,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import Button from "../../shared/Button";

import Header from "../../shared/Header";
import { useNavigate } from "react-router-dom";

/**
 *
 * @param {{login:boolean}} props
 * @returns
 */
const AuthPage = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((p) => {
        setLoading(false);
      })
      .catch((p) => {
        setLoading(false);
      });
  };
  const logIn = (e) => {
    e.preventDefault();

    setLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        console.log(user.user);
        setLoading(false);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((p) => {
      return { ...p, [name]: value };
    });
  };
  const signInWithGoogle = async () => {
    signInWithPopup(auth, googleProvider).then((p) => {
      console.log(p)
      navigate('/')
    });

  };
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      bgcolor={"primary.main"}
      flexDirection={"column"}
      gap={{ xs: 2, lg: 8 }}
    >
      <Header minimum />
      {loading ? (
        <Box position={"absolute"} zIndex={8} top={"40%"} left={"50%"}>
          <CircularProgress color="primary" />
        </Box>
      ) : null}
      <Box
        zIndex={1}
        width={{ xs: "80%", sm: "40%", md: "28%" }}
        margin={"0em auto"}
        border={"0.3em solid black"}
        paddingY={8}
        borderRadius={4}
        bgcolor={"white.main"}
        sx={{ borderColor: "secondary.main" }}
      >
        <Box
          width={"80%"}
          margin={"0 auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={4}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={{ xs: 1, lg: 2 }}
          >
            <Typography variant="h5" textAlign={"center"} color={"primary"}>
              {props.login ? "LOGIN WITH" : "SIGN UP WITH"}
            </Typography>
            <IconButton color="primary" onClick={signInWithGoogle}>
              <Google />
            </IconButton>
          </Box>
          <Divider sx={{ color: "primary.main" }}>OR</Divider>
          <Box
            display={"flex"}
            component={"form"}
            flexDirection={"column"}
            onSubmit={props.login ? logIn : signUp}
            gap={{ xs: 1, md: 2 }}
          >
            <TextField
              name="email"
              type="email"
              label="Your email"
              onChange={onChangeHandler}
              required
            />
            <TextField
              name="password"
              label="password"
              type="password"
              onChange={onChangeHandler}
              required
            />
            <Typography textAlign={"right"} color={"primary"} fontSize={"12px"}>
              Forgot your password?
            </Typography>
            <Button type={"submit"}>
              {props.login ? "Go inside" : "Sign up"}{" "}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box position={"absolute"} right={"3%"} top={{ xs: "3%", lg: "15%" }}>
        <img src="assets/Illustration login.png" alt="login page " />
      </Box>
    </Box>
  );
};

export default AuthPage;
