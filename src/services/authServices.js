import axios from "axios";
const API_KEY = "AIzaSyCGLSDraJVr4EXLqHaS1winqInMsg5DqJA";

//! store member account data
export const storeMemberAcc = (data) => {
    axios
        .post(
            "https://the-retro-frontend-default-rtdb.firebaseio.com/members.json",
            data
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};

//! get member account data
export const getMemberAcc = () => {
    return axios.get(
        "https://the-retro-frontend-default-rtdb.firebaseio.com/members.json"
    );
};

//! authenticate member
export const authenticate = (obj, mode) => {
    const data = {
        email: obj.email,
        password: obj.password,
        returnSecureToken: true,
    };

    let URL;

    if (mode === "signUp") {
        URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    } else if (mode === "signIn") {
        URL =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    }

    return axios.post(URL + API_KEY, data);
};

//! SingOut
export const signOut = () => {
    localStorage.removeItem("account");
    localStorage.removeItem("memberId");
    localStorage.removeItem("authToken");
    window.location.reload();
};
