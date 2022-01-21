
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
import ViewInterview from "./Pages/ViewInterview";
import UserHome from "./Pages/UserHome";
import NavBar from "./Components/NavBar";
import ViewJobPostings from "./Pages/ViewJobPostings"
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


export default function App() {
  const [videos, setVideos] = useState([])
  const [user, setUser] = useState('')
  const [job, setJob] = useState('')
  const [interview, setInterview] = useState('')
  let history = useHistory()

  const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    
  },
});


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
              <ThemeProvider>
            <SignUp user={user} setUser={setUser}/>
            
            </ThemeProvider>
            </Route>
            <Route exact path='/login'>
              <ThemeProvider>
              <Login setUser={setUser} ></Login>
              </ThemeProvider>
            </Route>
        </Switch>
      </div>
    )

  if (user.is_company) return (  
    <Switch>
      <Route exact path='/'>
        <div className="app">
        <ThemeProvider theme={darkTheme}>
          <NavBar logoutFunc={logoutFunc} user={user}/>
          
        
        <CompanyHome user={user} setJob={setJob} setInterview={setInterview}/>
        </ThemeProvider>
        
        </div>
      </Route>

      <Route exact path='/create'>
      
      
        <NavBar logoutFunc={logoutFunc} user={user}/>

        <CreateJob user={user} job={job} setJob={setJob}/>
      </Route>

      <Route exact path='/create/:createdJob'>
         <NavBar logoutFunc={logoutFunc} user={user}/>
        <ViewJob job={job} setJob={setJob} adding={true}/>
      </Route>

      <Route exact path='/:job'>
         <NavBar logoutFunc={logoutFunc} user={user}/>
        <ViewJob job={job} setJob={setJob} adding={false} interview={interview} setInterview={setInterview}/>
      </Route>
      
      <Route exact path='/interview/:interviewId'>
       <NavBar logoutFunc={logoutFunc} user={user}/>
        <ViewInterview user={user} interview={interview} setInterview={setInterview}/>
      </Route>
    </Switch>
 

    )
  if (!user.is_company) return (
    <Switch>
      <Route exact path='/'>
      <ThemeProvider theme={darkTheme}>
          <NavBar logoutFunc={logoutFunc} user={user}/>
          </ThemeProvider>
      <div className="app">
      <UserHome user={user}/>
     {videos[0] && videos.map((video)=>{
      return <div key={video.id}> <video  src={video.url} controls width={800} /> <p>{video.duration}</p></div>
     })}
    </div>
      </Route>
      
      <Route exact path='/interview/:jobId'>
        <NavBar logoutFunc={logoutFunc} user={user}/>
        <TakeInterview user={user}/>
      </Route>

      <Route exact path='/jobpostings'>
        <NavBar logoutFunc={logoutFunc} user={user}/>
        <ViewJobPostings/>
      </Route>

    </Switch>

  )

}
