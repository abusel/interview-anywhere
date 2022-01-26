
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
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles"


export default function App() {
  const [videos, setVideos] = useState([])
  const [user, setUser] = useState('')
  const [job, setJob] = useState('')
  const [interview, setInterview] = useState('')
  const [interviews, setInterviews] = useState([])
  let history = useHistory()
  const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    action: {
      disabledBackground: 'blue',
      disabledColor: 'red',
      },
    },

});




  useEffect(() => {
    fetch('/api/videos').then(res => res.json()).then(data => setVideos(data))
    //auto-login
    fetch('/api/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          // setInterviews(user.Interviews)
          });
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
                  <Login setUser={setUser} ></Login>
            
            {user.name}
            
            </Route>

            <Route exact path='/signup'>
            <SignUp user={user} setUser={setUser}/>
              
            </Route>

             <Route path='/'>
        <Redirect to="/" />
      </Route>

            
        </Switch>
      </div>
    )


  if (user.is_company) return (  
    <Switch>

      <Route exact path='/login'>
        <Redirect to="/" />
      </Route>
      <Route exact path='/signup'>
        <Redirect to="/" />
      </Route>

      <Route exact path='/'>
      <ThemeProvider theme={darkTheme}>
        <div className="app">
          <NavBar logoutFunc={logoutFunc} user={user}/>
        {user.name}
        <CompanyHome user={user} setJob={setJob} setInterview={setInterview}/>
        </div>
        </ThemeProvider>
      </Route>

      <Route exact path='/create'>
        <ThemeProvider theme={darkTheme}>
        <NavBar logoutFunc={logoutFunc} user={user}/>

        <CreateJob user={user} job={job} setJob={setJob}/>
        </ThemeProvider>
      </Route>

      <Route exact path='/create/:createdJob'>
      <ThemeProvider theme={darkTheme}>
         <NavBar logoutFunc={logoutFunc} user={user}/>
        <ViewJob job={job} setJob={setJob} adding={true}/>
        </ThemeProvider>
      </Route>

      <Route exact path='/:job'>
        <ThemeProvider theme={darkTheme}>
         <NavBar logoutFunc={logoutFunc} user={user}/>
        <ViewJob job={job} setJob={setJob} adding={false} interview={interview} setInterview={setInterview}/>
        </ThemeProvider>
      </Route>
      
      <Route exact path='/interview/:interviewId'>
      <ThemeProvider theme={darkTheme}>
       <NavBar logoutFunc={logoutFunc} user={user}/>
        <ViewInterview user={user} interview={interview} setInterview={setInterview}/>
        </ThemeProvider>
      </Route>
    </Switch>
 

    )
  if (!user.is_company) return (
    <Switch>
     <Route exact path='/login'>
        <Redirect to="/" />
      </Route>
      <Route exact path='/signup'>
        <Redirect to="/" />
      </Route>

      <Route exact path='/'>

    
        <ThemeProvider theme={darkTheme}>
        <NavBar logoutFunc={logoutFunc} user={user}/>
      <div className="app">
     

      
        <UserHome user={user} interviews={interviews} setUser={setUser}/>
        
  

      
      
     {videos[0] && videos.map((video)=>{
      return <div key={video.id}> <video  src={video.url} controls width={800} /> <p>{video.duration}</p></div>
     })}
    </div>
    </ThemeProvider>
      </Route>
      
      <Route exact path='/interview/:jobId'>
      <ThemeProvider theme={darkTheme}>
        <NavBar logoutFunc={logoutFunc} user={user}/>
        <TakeInterview user={user}/>
        </ThemeProvider>
      </Route>

      <Route exact path='/jobpostings'>
      <ThemeProvider theme={darkTheme}>
        <NavBar logoutFunc={logoutFunc} user={user}/>
        <ViewJobPostings/>
        </ThemeProvider>
      </Route>

    </Switch>

  )

}
