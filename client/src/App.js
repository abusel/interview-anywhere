
import { useEffect, useState } from "react";
import RecordView from "./Components/RecordView";


export default function App() {
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetch('/api/videos').then(res => res.json()).then(data => setVideos(data))
  }, [])

  return (  
  <div className="app">
      <RecordView />
      {videos[0] && videos.map()}
      
  </div>
    )

}
