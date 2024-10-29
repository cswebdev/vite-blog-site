import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import UserSettings from "./pages/UserSettings";
import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";

function App() {
   return (
      <div className="relative flex min-h-screen w-full flex-col">
         <div className="fixed top-0 w-full">
            <NavBar />
         </div>
         <div className="flex-grow pb-1 pt-1">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/landingpage" element={<LandingPage />} />
               <Route path="/usersettings" element={<UserSettings />} />
            </Routes>
         </div>
         <div className="fixed bottom-0 w-full">
            <BottomBar />
         </div>
      </div>
   );
}

export default App;
