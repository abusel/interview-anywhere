
import { useEffect, useState, useRef } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import getBlobDuration from 'get-blob-duration'

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
function RecordView(){
  const data = new FormData()
  const [url, setUrl] = useState('')
  const [duration, setDuration] = useState('')
  const testRef = useRef()


  useEffect(()=>{
      url && fetch('/api/videos', 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          url: url,
          duration: duration
        })
      })
  }, [url])
    
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
                    <h2>Recourse Recording Demo</h2>
                    <p>{status}</p>
                    <button onClick={()=>{
                      startRecording()
                      }}>Start Recording</button>
                    <button onClick={stopRecording}>Stop Recording</button>
                    <button onClick={()=> {
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
                      }}>play</button>
                    <div>
                      <video ref={testRef} src={mediaBlobUrl} controls autoplay  width={800} />
          
                    </div>
                    <div></div>
                  </div>
                )}
              />
            </div>
          );
}
export default RecordView