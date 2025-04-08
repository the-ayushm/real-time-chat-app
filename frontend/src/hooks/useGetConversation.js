import { useEffect, useState } from "react"
import toast from 'react-hot-toast'


const useGetConversation = () => {
  const [loading,setLoading] = useState(false)
  const [conversations, setConversations] = useState([]) 
//   console.log("useGetConversation hook called");
    
   useEffect(()=> {
    const getConversations = async() => {
        setLoading(true)
        try{
            
            const res = await fetch("/api/user", {  
                method: "GET",
                credentials: "include"
            });
            
            
            const data = await res.json()
            
            if(data.error){
                throw new Error(data.error.message)
            }
            setConversations(data)  
        }catch(err){
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
    }
    getConversations() 
   },[])

    
    return {loading, conversations} 
}

export default useGetConversation