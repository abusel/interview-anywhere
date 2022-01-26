
import { useEffect, useState, useRef } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import getBlobDuration from 'get-blob-duration'
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import Boop from '../Audio/Boop.m4a'




//https://api.cloudinary.com/v1_1/abusel


// /{fetch('/api/users', 
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
// }

  
// })

const VideoPreview = ({ stream }: { stream: MediaStream | null }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} width={500} height={500} autoPlay controls />;
};



function RecordView({type, job,  post, questions, setQuestions, recorded, setRecorded, hasRecorded, setHasRecorded}){
  const data = new FormData()
  const [duration, setDuration] = useState('')
  const [url, setUrl] = useState('')
  const [recording, setRecording] = useState(false)
  let audio = new Audio(Boop);



  const testRef = useRef()
  const vidRef = useRef()
  const liveRef = useRef()
  let history = useHistory()


  useEffect(()=>{
      url && fetch('/api/questions', 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          link: url,
          duration: duration,
          job_id: job.id
        })
      }).then(res => res.json()).then(data => {
        type === 'q2' && setQuestions([...questions, data])
        console.log(data)
      }
      ). then(()=> {
        type === 'q1' && history.push(`/create/${job.id}`)
      })
  }, [post])
    
    return     (
            <div>
           
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
                  })
                  .catch(err => console.log(err))
                  }
                }
                render={({ status, startRecording, stopRecording, mediaBlobUrl, previewStream }) => (
                  
                  <div>
                   
                    {status === 'recording' && <h2> Start talking now!</h2>}
                    {!recording && <Button color="primary" variant="outlined" onClick={()=>{
                      startRecording()
                    
                    setTimeout(() => {
                        audio.play()
                        
                        
                      }, 400);
                      setTimeout(() => {
                        liveRef.current.click()
                        
                        
                      }, 2500);
                      setRecording(true)
                      }}>{hasRecorded ? 'New Attempt': 'Start Recording'}</Button>}
                   { recording && <Button color="primary" variant="outlined" onClick={()=> {
                      stopRecording()
                      setRecording(false)
                      setRecorded(true)
                      let currentMedia = testRef.current.srcObject.getTracks()[0]
                      testRef.current.srcObject.removeTrack(currentMedia)       
                                     testRef.current.src = mediaBlobUrl


                      setHasRecorded(true)
                      }}>Stop Recording</Button>}
                    <Button color="primary" variant="outlined" ref={liveRef} style={{display: 'none'}} onClick={()=> {

                      if(testRef.current ){
                        testRef.current.srcObject = previewStream
                      } 
                      
                      }}>play</Button>
                    <div>
                      {recording && <video ref={testRef}  autoPlay  width={600} />
                       }
                       {!recording && <video src={mediaBlobUrl ? mediaBlobUrl : url} controls autoplay  width={600}/>}
                    </div>
                    <div></div>
                  </div>
                )}
              />
            </div>
          );
}
export default RecordView