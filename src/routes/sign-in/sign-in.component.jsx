import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const signIn = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDoc = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>SignIn page</h2>
      <button onClick={signIn}>Sign In with Google popup</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
