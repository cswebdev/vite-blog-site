export default function UserSettings() {
   return (
      <div className="flex flex-grow min-h-screen bg-background">
         <div className="flex grow justify-center mt-32">
            <h1 className="bg-copy-primary text-2xl">
               Manage your settings here
            </h1>
            <div className="container mx-auto p-6">
               <div className="grid grid-cols-3 gap-4">
                  {/* left col */}
                  <div className="col-span-1 bg-gray-100 rounded-lg">
                     <ul className="space-y-4">
                        <li>
                           <button></button>
                        </li>
                        <li>
                           <button></button>
                        </li>
                        <li>
                           <button></button>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
