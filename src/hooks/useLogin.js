import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";

const useLogin = () => {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);

  const login = async (inputs) => {
    /* email or password empty */
    if (!inputs.email || !inputs.password) {
      showToast("Error", "Please fill in all the fields", "error");
    }

    try {
      /* verifies if email/password is correct */
      const userCredential = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      /* fetches doc, sets local storage, and does login function */
      if (userCredential) {
        const docRef = doc(firestore, "users", userCredential.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, login };
};

export default useLogin;
