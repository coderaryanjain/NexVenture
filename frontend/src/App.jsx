import {Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm";

const App = () => {
    return (
        <Routes>
            <Route path ="/" element={<Navbar />}>
                <Route path="signin" element ={<UserAuthForm type="sign-in"/>}></Route>
                <Route path="signup" element ={<UserAuthForm type="sign-up"/>}></Route>
            </Route>
        </Routes>
    );
}

export default App;