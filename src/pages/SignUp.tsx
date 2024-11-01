import { useState } from "react";
import { User } from "../types/types";

// interface UserSignUpProps {
//    user: Pick<User, "username" | "email" | "password">;
// }
export default function SignUp() {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const user: Pick<User, "username" | "email" | "password"> = {
         username,
         email,
         password,
      };

      localStorage.setItem("user", JSON.stringify(user));
      alert("User object is saved to local storage");
   };

   return (
      <>
         <div className="w-full max-w-sm">
            <form
               className="bg-background shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
               onSubmit={handleSubmit}
            >
               <div>
                  <label htmlFor="email">Email</label>
                  <div>
                     <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
               </div>
               <div>
                  <label htmlFor="username">Username</label>
                  <div>
                     <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>
               </div>
               <div>
                  <label htmlFor="password">Password</label>
                  <div>
                     <input
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
               </div>
               <button type="submit">Submit</button>
            </form>
         </div>
      </>
   );
}
