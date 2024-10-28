import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import UserSettings from "./pages/UserSettings";
import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";

function App() {
   return (
      <>
         <div className="bg-transparent m-0 p-0">
            <div className="fixed top-0 w-full">
               <NavBar />
            </div>
         </div>

         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/UserSettings" element={<UserSettings />} />
         </Routes>

         <div className="fixed bottom-0 w-full">
            <BottomBar />
         </div>
      </>
   );
}
export default App;
