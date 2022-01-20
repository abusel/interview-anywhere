import { ReactMediaRecorder } from "react-media-recorder";
import {useState, useEffect, useRef} from 'react'
import {Button} from '@material-ui/core';
import getBlobDuration from 'get-blob-duration'
import Boop from '../Audio/Boop.m4a'


function QuestionAnswer({interview, question, test, hide, setHide}){
    const data = new FormData()
    const [duration, setDuration] = useState('')
    const [url, setUrl] = useState('')
    const startRef = useRef()
    const testRef = useRef()
    const liveRef = useRef()
    const [post, setPost] = useState(false)
    const [recording, setRecording] = useState(false)
      let audio = new Audio(Boop);



    useEffect(()=>{
        url && fetch('/api/answers', 
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            link: url,
            duration: duration,
            interview_id: interview.id
          })
        }).then(res => res.json()).then(data => {
          console.log(data)
        }
        
        )
  console.log(question)
    
    }, [post])

    useEffect(()=>{
        setTimeout(()=> {
            startRef.current.click()
        }, (question.duration * 1000 + 200))
    }, [test])

    return (
        <>

 

        <ReactMediaRecorder
              video
              audio={true}
           
              onStop={(blobURL, blob)=> {
                data.append('file', blob)
                data.append("upload_preset", "test-video")
                data.append("cloud_name","abusel")
                getBlobDuration(blob).then(function(dur) {
                  setDuration(dur)
                });
                fetch(" https://api.cloudinary.com/v1_1/abusel/video/upload",{
                method:"post",
                body: data
                })
                .then(resp => resp.json())
                .then(data => {
                setUrl(data.url)
                }).then(()=> setPost(post => !post))
                .catch(err => console.log(err))
                }
              }
              render={({ status, startRecording, stopRecording, mediaBlobUrl, previewStream }) => (
                <div>
                  <p>{status}</p>
                  {status === 'recording' && <h2> Start talking now!</h2>}
                  <p    ref={startRef}   onClick={()=>{
                    startRecording()
                    setHide(true)
                    setTimeout(() => {
                        audio.play()
                        
                        
                      }, 400);
                    setTimeout(() => {
                        liveRef.current.click()
                        
                      }, 2500);
                    setRecording(true)
                    }}></p>
                    <Button color="primary" variant="outlined" ref={liveRef} style={{display: 'none'}} onClick={()=> {

                      testRef.current.srcObject = previewStream

                      }}>play</Button>
                  <Button color="primary" variant="contained" onClick={()=> {
                    stopRecording()
                    setRecording(false)}
                    }>Stop Recording</Button>
                 { !hide && <video src={question.link} autoPlay></video>}
                  {recording && <video ref={testRef} autoPlay  width={800} />}
                 

                  {/* <Button color="primary" variant="contained" onClick={()=> {
                    // fetch('/api/users', 
                    // {
                    //   method: 'POST',
                    //   headers: {
                    //     'Accept': 'application/json',
                    //     'Content-Type': 'application/json'
                    //   },
                    //   body:JSON.stringify({
                    //     name: 'testofficial',
                    //     video: blob
                    //   })
                    // })

                    // fetch('http://res.cloudinary.com/abusel/video/upload/v1641849510/imxmssfgxmdrh6y7c8fo.mkv')
                    // .then(res=> res.)
                    // console.log(mediaBlobUrl)
                    }}>play</Button> */}
                  <div>
                  </div>
                  <div></div>
                </div>
              )}
            />
        </>

    )

}
export default QuestionAnswer