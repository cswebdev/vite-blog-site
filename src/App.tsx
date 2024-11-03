import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import UserSettings from "./pages/UserSettings";
import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";
import SignUp from "./pages/SignUp";

function App() {
   const location = useLocation();

   const isLandingPage = location.pathname === "/";

   return (
      <div className="flex min-h-screen flex-col">
         {!isLandingPage && (
            <div className="fixed top-0 min-w-full max-w-full z-50">
               <NavBar />
            </div>
         )}
         {isLandingPage && (
            <div className="w-full">
               <NavBar />
            </div>
         )}
         <div className="flex-grow overflow-y-auto ">
            <Routes>
               <Route path="/" element={<LandingPage />} />
               <Route path="/homepage" element={<HomePage />} />
               <Route path="/landingpage" element={<LandingPage />} />
               <Route path="/usersettings" element={<UserSettings />} />
               <Route path="/signup" element={<SignUp />} />
            </Routes>
         </div>
         <div className="fixed bottom-0 w-full">
            <BottomBar />
         </div>
      </div>
   );
}

export default App;
