
import { useEffect, useState } from "react";
import RecordView from "./Components/RecordView";
import SignUp from "./Pages/SignUp";
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from "./Pages/Login";
import {Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import CompanyHome from "./Pages/CompanyHome";
import CreateJob from './Pages/CreateJob';
import ViewJob from "./Pages/ViewJob";
import TakeInterview from './Pages/TakeInterview'


export default function App() {
  const [videos, setVideos] = useState([])
  const [user, setUser] = useState('')
  const [job, setJob] = useState('')
  let history = useHistory()



  useEffect(() => {
    fetch('/api/videos').then(res => res.json()).then(data => setVideos(data))
    //auto-login
    fetch('/api/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

  }, []);

  
  function logoutFunc() {
    fetch('/api/logout', { method: 'DELETE' })
    .then((data) => console.log(data));
    setUser('')
    history.push('/')
}

  if (!user) 
    return (
      <div className="app">
        <Switch>
            <Route exact path='/'>
                  
            <SignUp user={user} setUser={setUser}/>
            {user.name}
            
            </Route>
            <Route exact path='/login'>
              <Login setUser={setUser} ></Login>
            </Route>
        </Switch>
      </div>
    )

  if (user.is_company) return (  
    <Switch>
      <Route exact path='/'>
        <div className="app">
        {user.name}
        <Button onClick={logoutFunc}>Log out</Button>
        <CompanyHome user={user} setJob={setJob}/>
        </div>
      </Route>
      <Route exact path='/create'>
        <Button onClick={logoutFunc}>Log out</Button>
        <CreateJob user={user} job={job} setJob={setJob}/>
      </Route>
      <Route exact path='/create/:createdJob'>
        <ViewJob job={job} setJob={setJob} adding={true}/>
      </Route>
      <Route exact path='/:job'>
        <ViewJob job={job} setJob={setJob} adding={false}/>
      </Route>
    </Switch>
 

    )
  if (!user.is_company) return (
    <Switch>
      <Route exact path='/'>
      <div className="app">
      hello {user.name}
      <Button onClick={logoutFunc}>Log out</Button>
      <RecordView />
     {videos[0] && videos.map((video)=>{
      return <div key={video.id}> <video  src={video.url} controls width={800} /> <p>{video.duration}</p></div>
     })}
    </div>
      </Route>
      <Route exact path='/interview/:jobId'>
        <TakeInterview user={user}/>
      </Route>

    </Switch>

  )

}
