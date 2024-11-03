import { useState } from "react";
import { User } from "../types/types";
import { useNavigate } from "react-router-dom";

// interface UserSignUpProps {
//    user: Pick<User, "username" | "email" | "password">;
// }
export default function SignUp() {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const user: Pick<User, "username" | "email" | "password"> = {
         username,
         email,
         password,
      };

      localStorage.setItem("user", JSON.stringify(user));
      alert("User object is saved to local storage");
      console.log({ user });

      navigate("/homepage");
   };

   return (
      <div className="flex justify-center align-middle items-center h-svh  bg-fuchsia-200">
         <div className="w-full max-w-sm ring-4 ">
            <form
               className="bg-background shadow-md rounded-md px-8 pt-6 pb-8 mb-4 bg-slate-100"
               onSubmit={handleSubmit}
            >
               <p>To join, please enter the following information</p>
               <div className="my-3">
                  <label htmlFor="email">Email</label>
                  <div>
                     <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 ring-2 ring-neutral-400 rounded-sm w-full"
                     />
                  </div>
               </div>
               <div className="my-3">
                  <label htmlFor="username">Username</label>
                  <div>
                     <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-gray-50 ring-2 ring-neutral-400 rounded-sm w-full"
                     />
                  </div>
               </div>
               <div className="my-3">
                  <label htmlFor="password">Password</label>
                  <div>
                     <input
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50 ring-2 ring-neutral-400 rounded-sm w-full"
                     />
                  </div>
               </div>
               <button
                  type="submit"
                  className="ring-2 ring-blue-500 rounded-md p-2 bg-neutral-200 mt-5"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
}
