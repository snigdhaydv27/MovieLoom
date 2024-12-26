// import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./homeScreen";

const HomePage = () => {
	const user  = false;

	return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
};
export default HomePage;