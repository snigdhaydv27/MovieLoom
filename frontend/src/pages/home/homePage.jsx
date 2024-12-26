import  useAuthStore  from "../../stores/authUser.js";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./homeScreen";

const HomePage = () => {
	const { user } = useAuthStore();

	return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
};
export default HomePage;