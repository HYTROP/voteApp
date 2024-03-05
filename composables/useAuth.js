import {
	getAuth,
	setPersistence,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

export default function useAuth() {
	const user = useState('userStore', () => ({}));

	const { app } = useFireBase();

	const auth = getAuth(app);

	function signUp() {
		setPersistence(auth, 'LOCAL').then(() => {
			createUserWithEmailAndPassword(auth, email, password).then(
				(userDetails) => {
					user.value = userDetails.user;
					userDetails.user.getIdToken().then((token) => {
						console.log(token);
					});
				}
			);
		});
	}
	function login(email, password) {
		setPersistence(auth, 'LOCAL').then(() => {
			signInWithEmailAndPassword(auth, email, password).then((userDetails) => {
				user.value = userDetails.user;
				userDetails.user.getIdToken().then((token) => {
					console.log(token);
				});
			});
		});
	}
	function logout() {
		auth.signOut().then(() => {});
	}
	return {
		user,
		signUp,
		login,
		logout,
	};
}
