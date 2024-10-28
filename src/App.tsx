import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import UserSettings from "./pages/UserSettings";
import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";

function App() {
   return (
      <div className="relative min-h-screen flex flex-col">
         <div className="bg-transparent m-0 p-0">
            <div className="fixed top-0 w-full">
               <NavBar />
            </div>
         </div>
         <div className="flex-grow pt-1 pb-1">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/LandingPage" element={<LandingPage />} />
               <Route path="/UserSettings" element={<UserSettings />} />
            </Routes>
         </div>

         <div className="fixed bottom-0 w-full">
            <BottomBar />
         </div>
      </div>
   );
}
export default App;
