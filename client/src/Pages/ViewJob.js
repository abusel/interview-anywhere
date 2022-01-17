import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecordView from "../Components/RecordView";
import {useHistory} from 'react-router-dom'


function ViewJob({job, setJob, adding, interview, setInterview}){
    const params = useParams();
    const [log, setLog] = useState(false)
    const [questions, setQuestions] = useState([])
    const [post, setPost] = useState(false)
    const [interviews, setInterviews] = useState([])
    let history = useHistory()



    useEffect(()=>{
        fetch(`/api/jobs/${params.job}`).then(r => r.json()).then(data => setJob(data))
    }, [])

    useEffect(
      () => {
        !adding && fetch(`/api/interviewjob/${job.id}`).then(r => r.json()).then(data => setInterviews(data))
      },
      [job]
    );

    useEffect(()=>{
        fetch(`/api/jobs/${job.id}`).then(r => r.json()).then(data => setQuestions(data.questions))
    }, [job])
  
    return(
        <div>
            {job.title}
            {
                questions && questions.map(q =>{
                    return (
                        <div>
                            <h3>Question</h3>
                            <video src={q.link} controls autoplay  width={600}/>
                        </div>
                    )
                })
            }
           { adding ? <><RecordView type='q2' questions={questions} setQuestions={setQuestions} post={post} job= {job} />
            <Button onClick={()=>setPost(post => !post)}>Add Question</Button>
            <Button onClick={()=> history.push(`/`)}> Publish</Button>
            </> : <>
                <h3> Link: http://localhost:4000/interview/{job.id}</h3>
                <h5>View Interviews</h5>
                {
                    <ul>
                        {
                            interviews[0] && interviews.map(interview => {
                                return  <li onClick={()=> {
                                    history.push(`/interview/${interview.id}`)
                                    setInterview(interview)
                                }}>{interview.user.name}</li>
                            })
                        }
                    </ul>
                    
                }
            </>}
            
            
        </div>
    )
}

export default ViewJob