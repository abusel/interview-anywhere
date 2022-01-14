import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecordView from "../Components/RecordView";
import {useHistory} from 'react-router-dom'


function ViewJob({job, setJob, adding}){
    const params = useParams();
    const [log, setLog] = useState(false)
    const [questions, setQuestions] = useState([])
    const [post, setPost] = useState(false)
    let history = useHistory()



    // useEffect(
    //   () => setJob(params.createdJob),
    //   [job]
    // );

    useEffect(()=>{
        fetch(`/api/jobs/${job.id}`).then(r => r.json()).then(data => setQuestions(data.questions))
    }, [])
  
    return(
        <div>
            {job.title}
            {
                questions.map(q =>{
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
            </>}
            
            
        </div>
    )
}

export default ViewJob