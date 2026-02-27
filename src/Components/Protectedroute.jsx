// Using Protectedroute.jsx for the dashbaord access for only logged in users, even if somebody enters "/dashboard" manually 
// also they couldn't access it. 

import { Navigate } from "react-router-dom"
import { useEffect,useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./config/firebase"

function Protectedroute({children})
{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
            setUser(currentuser)
            setLoading(false)
        }) 
        return () => unsubscribe()
    },[])

    if(loading)
    {
        return <p> Loading... </p>
    }
    return user? children: <Navigate to="/login" />
}

export default Protectedroute