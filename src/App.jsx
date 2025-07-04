import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from './store/feature/auth/authSlice'
import authService from './appwrite/authServices'
import {Header, Footer} from './components/index'
function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
      dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch((error)=>{
      console.log("error :: user Not login :: ", error);
    })
    .finally(()=>setLoading(false))
  },[])
  
  return !loading ? (
      <div className='min-h-screen w-screen bg-gray-800 flex flex-col items-center justify-between'>
        <Header/>
        <main>

        </main>
        <Footer/>
    </div>
  ):null

}

export default App
