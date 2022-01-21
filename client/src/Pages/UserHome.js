import { Button } from '@mui/material';
import Input from '@mui/material/Input';
import {useState} from 'react'
import { useHistory } from 'react-router-dom'


function UserHome({user}){
    const [interviewCode, setInterviewCode] = useState('')
    let history = useHistory()

    return (
        <div>
           <p style={{color: 'white'}}>Welcome {user.name}!</p> 
           <p style={{color: 'white'}}> Please enter code below to go to an interview! </p>
           <div>
           <Input placeholder='Interview Code' value={interviewCode} onChange={(e)=> setInterviewCode(e.target.value)} variant='filled' sx={{ bgcolor: 'white', color: 'black'}} />
            <Button onClick={()=> {
                history.push(`/interview/${interviewCode}`)
            }} variant='filled' sx={{ bgcolor: '#CF9FFF', color: 'black'}} disabled={interviewCode ? false: true}>Let's go</Button>
           </div>
            
        </div>
    )
}
export default UserHome