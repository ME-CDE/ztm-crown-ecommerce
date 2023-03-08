import React from "react";
import { signInWithGooglePopUp,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const signIn = async () => {
    const {user} = await signInWithGooglePopUp();
    createUserDocumentFromAuth(user)
  };
  return (
    <div>
      <h2>SignIn page</h2>
      <button onClick={signIn}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
