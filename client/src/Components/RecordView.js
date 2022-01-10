
import { useEffect, useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

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
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')


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
          duration: (endTime - startTime)/1000
        })
      })
  }, [endTime])
    
    return     (
            <div>
              <ReactMediaRecorder
              
                video
                audio={true}
                onStop={(blobURL, blob)=> {
                  data.append('file', blob)
                  data.append("upload_preset", "test-video")
                  data.append("cloud_name","abusel")
                  fetch(" https://api.cloudinary.com/v1_1/abusel/video/upload",{
                  method:"post",
                  body: data
                  })
                  .then(resp => resp.json())
                  .then(data => {
                  setUrl(data.url)
                  setEndTime(Date.now())
                  })
                  .catch(err => console.log(err))
                  }
                }
                render={({ status, startRecording, stopRecording, mediaBlobUrl, previewStream }) => (
                  <div>
                    <h2>Recourse Recording Demo</h2>
                    <p>{status}</p>
                    <button onClick={()=>{
                      setStartTime(Date.now())
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
                      console.log((endTime - startTime)/ 1000)
                      }}>Log</button>
                    <div>
                      <video src={'http://res.cloudinary.com/abusel/video/upload/v1641849840/csb9sioizzppae77s8xl.mkv'} controls autoplay loop width={800} />
          
                    </div>
                    <div></div>
                  </div>
                )}
              />
            </div>
          );
}
export default RecordView