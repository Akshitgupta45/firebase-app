import react, { useState } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	// GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from "firebase/auth";
import { app } from "../firebase";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const provider = new GoogleAuthProvider();
	const auth = getAuth(app);
	const signInwithGoogle = () => {
		// signInWithPopup(auth, provider)
		// 	.then((result) => {
		// 		console.log("Signed In With Google", result);
		// 	})
		// 	.catch((err) => {
		// 		console.log("ERROR", err);
		// 	});

		// sign in with redirect
		signInWithRedirect(auth, provider)
			.then((result) => {
				console.log("sign in with redirect", result);
			})
			.catch((err) => {
				console.log("ERROR", err);
			});
	};
	const signUpUser = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((user) => {
				console.log(user);
			})
			.catch((err) => {
				console.log("ERROR", err);
			});
	};
	return (
		<div className="signUp-user">
			<h2>SignUp Page</h2>
			<label>Email:</label>
			<input
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				type="email"
				placeholder="Enter your email"
			/>
			<br />
			<br />
			<label>Password:</label>
			<input
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				type="password"
				placeholder="Enter your password"
			/>
			<br />
			<br />
			<button style={{ border: "1px solid black" }} onClick={signUpUser}>
				Create User
			</button>
			<button style={{ border: "1px solid black" }} onClick={signInwithGoogle}>
				Sign In with Google
			</button>
		</div>
	);
};
export default SignUp;
