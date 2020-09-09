import URLConstants from "../../constants/URLConstants";

export const LOGIN_USER = 'LOGIN_USER';
export const SIGN_UP_USER = 'SIGN_UP_USER';
export const USER_PROFILE = 'USER_PROFILE';



export const loginUser = (username, password) => {

    return async dispatch => {

        // any async code you want!

        const response = await fetch(URLConstants.LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const resData = await response.json();

        console.log("LOGIN_USER", resData);

        const loginResponse = resData;

        console.log("LOGIN_USER loginResponse", loginResponse);


        dispatch({ type: LOGIN_USER, payload: loginResponse });
    };
};


export const userProfile = (userId) => {

    return async dispatch => {

        // any async code you want!

        const response = await fetch(URLConstants.USER_PROFILE_URL + userId);

        const resData = await response.json();

        console.log("USER_PROFILE", resData);



        dispatch({ type: USER_PROFILE, payload: resData });
    };
};







