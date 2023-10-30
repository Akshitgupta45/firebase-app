import { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./firebase";
function App() {
	const [user, setUser] = useState("");
	const auth = getAuth(app);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user);
				setUser(user);
			} else {
				console.log("NO user Signed In");
				setUser(null);
			}
		});
	}, []);
	if (user === null) {
		return (
			<>
				<SignUp />
				<hr />
				<SignIn />
			</>
		);
	}
	return (
		<>
			<h1>Hello {user.email}</h1>
			<button
				style={{ border: "1px solid black" }}
				onClick={() => signOut(auth)}
			>
				Logout
			</button>
		</>
	);
}

export default App;
