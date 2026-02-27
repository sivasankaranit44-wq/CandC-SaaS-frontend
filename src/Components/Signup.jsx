import {useState} from 'react'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from '../Components/config/firebase'
import {useNavigate} from "react-router-dom"
function Signup() 
{

  const [username, setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword]=useState("")
  const [confirmPassword, setConfirmpassword]=useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  // creating signup handle
  const handleSignup = async(e) => {
    e.preventDefault();
    if(password !== confirmPassword)
    {
      setError("Passwords do not Match.")
      return;
    }
    try{
      // await createUserWithEmailAndPassword(auth, email, password)
      // creating username 
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      // displaying username in the dashboard 
      await updateProfile(userCredential.user,{
        displayName:username
      })
      alert("Account Created Successfully!")
      navigate("/login")
    }catch(err)
    {
      setError(err.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account :)</h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              name="confirmPassword"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Re-type your password"
            />
          </div>

          {/* password mismatch indication */}
          {error && <p className='text-red-600 text-xl text-center'>{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;