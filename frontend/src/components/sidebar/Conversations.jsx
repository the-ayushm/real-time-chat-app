import useGetConversation from "../../hooks/useGetConversation"
import Conversation from "./Conversation"

const Conversations = () => {
  const {loading,conversations} = useGetConversation()
  // console.log("CONVERSATIONS:", conversations)
  return (
    <div className="py-2 flex flex-col overflow-auto">
        {conversations.map((conversation,idx) => (  
            <Conversation  
            key={conversation._id} 
            conversation={conversation} 
            lastIdx = {idx === conversations.length - 1} 
            />
        ))}
        
    </div>
  )
}

export default Conversations