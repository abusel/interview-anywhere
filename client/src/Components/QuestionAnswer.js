import { ReactMediaRecorder } from "react-media-recorder";
import {useState, useEffect, useRef} from 'react'
import {Button} from '@material-ui/core';
import getBlobDuration from 'get-blob-duration'


function QuestionAnswer({jobId, question}){
    const data = new FormData()
    const [duration, setDuration] = useState('')
    const [url, setUrl] = useState('')
    const testRef = useRef()

    return (
        <>
        <div>asd;lfkj</div>
        <video src={question.link} autoPlay></video>

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
                  <h2>Recourse Recording Demo</h2>
                  <p>{status}</p>
                  <Button color="primary" variant="contained" onClick={()=>{
                    startRecording()
                    }}>Start Recording</Button>
                  <Button color="primary" variant="contained" onClick={stopRecording}>Stop Recording</Button>
                  <Button color="primary" variant="contained" onClick={()=> {
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
                    testRef.current.play()
                    }}>play</Button>
                  <div>
                    <video ref={testRef} src={mediaBlobUrl ? mediaBlobUrl : url} controls autoplay  width={800} />
                  </div>
                  <div></div>
                </div>
              )}
            />
        </>

    )

}
export default QuestionAnswer