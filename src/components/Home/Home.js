import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Home = () => {
    const [userObj] = useAuthState(auth);
    return (
        <div>
            <h2>This is Home</h2>
            {userObj?.displayName ? (
                <p>Current user is {userObj.displayName}</p>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Home;
