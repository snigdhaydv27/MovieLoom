import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import LoginPage from './pages/loginPage.jsx';
import SignupPage from './pages/signupPage';



function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={ <SignupPage/>}/>
    </Routes>
  )
}

export default App
