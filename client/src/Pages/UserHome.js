import { Button } from '@mui/material';
import Input from '@mui/material/Input';
import {useState} from 'react'
import { useHistory } from 'react-router-dom'


function UserHome({user}){
    const [interviewCode, setInterviewCode] = useState('')
    let history = useHistory()

    return (
        <div>
           <p>Welcome {user.name}!</p> 
           <p>Please enter code below to go to an interview! </p>
           <div>
           <Input placeholder='Interview Code' value={interviewCode} onChange={(e)=> setInterviewCode(e.target.value)}/>
            <Button onClick={()=> {
                history.push(`/interview/${interviewCode}`)
            }}>Let's go</Button>
           </div>
            
        </div>
    )
}
export default UserHome