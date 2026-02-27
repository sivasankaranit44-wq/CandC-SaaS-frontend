import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"  
import { auth } from "../Components/config/firebase"


function Dashboard()
{
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return()=>unsubscribe()
    },[])
    return(
        <>
        <div> 
            <div className="flex min-h-screen  bg-gray-100">
                <aside className="w-64 bg-white shadow-md p-4">
                    <h2 className="text-l font-bold mb-6">
                        CandC Dashboard
                    </h2>
                    <ul className="space-y-4"> 
                        <li> 
                            <a href="/dashboard" className="hover:text-blue-600"> Overview </a>
                        </li>

                        <li> 
                            <a href="/dashboard" className="hover:text-blue-600"> Billing </a>
                        </li>

                        <li> 
                            <a href="/dashboard" className="hover:text-blue-600"> Settings </a>
                        </li>

                        <li> 
                            <a href="/dashboard" className="hover:text-blue-600"> Report </a>
                        </li>
                    </ul>

                    <main className="flex-1 p-6"> 
                        <h1 className="text-2xl font-bold mb-4"> 
                            {/* for showing the username instead of email ID */}
                            Welcome Back, {user? user.displayName || user.email:"user"}
                        </h1>

                        <div className="grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-lg font-semibold">
                                    Usage
                            </h2>
                            <p> API Calls: 120 </p>
                            <p> Storage: 2.5GB/15GB </p>
                            
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow mt-4">
                                <h2 className="text-lg font-semibold"> 
                                    Notifications
                                </h2>
                            
                            <ul className="list-disc ml-4">
                                <li> 
                                    New Feature released.
                                </li>
                                <li>
                                    Billing Cycle renews in 5 days
                                </li> 
                            </ul>
                            </div>
                        </div>
                    </main>
                </aside>
            </div>
        </div>
        </>
    )
}

export default Dashboard