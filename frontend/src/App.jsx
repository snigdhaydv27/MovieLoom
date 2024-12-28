import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import WatchPage from "./pages/watchPage.jsx";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import  useAuthStore  from "./stores/authUser.js";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import SearchPage from "./pages/searchPage";
import SearchHistoryPage from "./pages/searchHistory";


function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-myColor-600 size-10" />
        </div>
      </div>
    );
  }
  return (
    <>
     <Routes>
     <Route path='/' element={<HomePage />} />
				<Route path='/login' element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
				<Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to={"/"} />} />
				<Route path='/watch/:id' element={user ? <WatchPage /> : <Navigate to={"/login"} />} />
        <Route path='/search' element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
        <Route path='/history' element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />} />
			</Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
