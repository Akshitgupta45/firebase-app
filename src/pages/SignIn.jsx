import react, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const auth = getAuth(app);
	const signInUser = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((user) => {
				console.log("signIn successfull", user.user);
			})
			.catch((err) => {
				console.log("ERROR", err.code, err.message);
				// const errorCode = err.code;
				// const errorMessage = err.message;
				// // console.log(errorCode);
				// console.log(errorMessage);
			});
	};
	return (
		<>
			<h2>SignIn User</h2>
			<label>Email:</label>
			<input
				type="email"
				placeholder="Enter your email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<br />
			<br />
			<label>Password:</label>
			<input
				type="password"
				placeholder="Enter your password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>
			<br />
			<br />
			<button style={{ border: "1px solid black" }} onClick={signInUser}>
				SignIn
			</button>
		</>
	);
};
export default SignIn;
