
import './App.css';
import './components/Fontawesome';
import Example from './pages/signin';
import Passwordreset from './pages/password-reset';
import Signin from './pages/dsignin';
import Forgotpassword from './pages/forgot-password';
import Emaibox from './pages/email';
import Signup from './pages/singup';
import {
  Routes,
  Route,
  Navigate,

} from "react-router-dom";


function App() {
  return (
   
    <Routes>
    {/* <Route path='/' element={<Example />} /> */}
    <Route path='/' element={<Signin />} />
    <Route path='/password-reset' element={<Passwordreset />} />
    <Route path='/forgotten-password' element={<Forgotpassword />} />
    <Route path='/email' element={<Emaibox />} />
    <Route path='/Signup' element={<Signup />} />
   
    </Routes>
  
  );
}

export default App;
