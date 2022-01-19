
import { useEffect, useState, useRef } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import getBlobDuration from 'get-blob-duration'
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'



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



function RecordView({type, job,  post, questions, setQuestions}){
  const data = new FormData()
  const [duration, setDuration] = useState('')
  const [url, setUrl] = useState('')
  const [hasRecorded, setHasRecorded] = useState(false)
  const [recording, setRecording] = useState(false)


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
              {/* <ReactMediaRecorder
          video
          render={({ previewStream }) => {
            return <VideoPreview stream={previewStream} />;
          }}
  /> */}

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
                    <Button color="primary" variant="outlined" onClick={()=>{
                      startRecording()
                      setTimeout(() => {
                        liveRef.current.click()
                        
                      }, 2000);
                      setRecording(true)
                      }}>{hasRecorded ? 'New Attempt': 'Start Recording'}</Button>
                    <Button color="primary" variant="outlined" onClick={()=> {
                      stopRecording()
                      setRecording(false)
                      let currentMedia = testRef.current.srcObject.getTracks()[0]
                      testRef.current.srcObject.removeTrack(currentMedia)       
                                     testRef.current.src = mediaBlobUrl


                      setHasRecorded(true)
                      }}>Stop Recording</Button>
                    <Button color="primary" variant="outlined" ref={liveRef} style={{display: 'none'}} onClick={()=> {
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
                      testRef.current.srcObject = previewStream
                      testRef.current.play()
                      }}>play</Button>
                    <div>
                      {recording && <video ref={testRef} src={mediaBlobUrl ? mediaBlobUrl : url} controls autoplay  width={800} />
                       }
                       {!recording && <video src={mediaBlobUrl ? mediaBlobUrl : url} controls autoplay  width={800}/>}
                    </div>
                    <div></div>
                  </div>
                )}
              />
            </div>
          );
}
export default RecordView