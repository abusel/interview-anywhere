import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RecordView from './RecordView';
import Input from '@mui/material/Input';
import { useHistory } from 'react-router-dom'
import TextField from '@mui/material/TextField'



const steps = ['Name the Job', '', 'Create First Question'];

export default function CreateQuestion({setJob, job, user}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [jobTitle, setJobTitle] = useState('')
  const [post, setPost] = useState(false)

  let history = useHistory()


    useEffect(()=>{

    },[activeStep])

    useEffect(()=>{
      setJob('f')
    }, [])

  const isStepOptional = (step) => {
    return step === 10;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    if (activeStep === steps.length -1){
        console.log('finished')
        fetch('/api/jobs',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title: jobTitle,
                allow_multiple_attempts: false,
                user_id: user.id
            })
          }).then(res => res.json()).then(data => 
            setJob(data)).then(()=>setPost(post => !post)).then(()=>
          {
            //history.push(`/create/${jobTitle}`)
  

          })
    }
  };

  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
    {activeStep === 0 && <div style={{textAlign: 'center', color: 'white'}}>
        <Typography variant="h5" gutterBottom component="div">
        Please name the job
      </Typography>
        <Input variant='filled' sx={{ bgcolor: 'white'}}  value={jobTitle} onChange={(e)=> setJobTitle(e.target.value)} placeholder='Job Title'/>
        </div>}


        {activeStep === 1 && <div style={{color:'white'}}>
          <Typography variant="h6" gutterBottom component="div">
        Use the first question as an opportunity to introduce yourself and prompt the applicant to introduce themselves
      </Typography>
        </div>
        }



    {activeStep > 1 && <RecordView type='q1' job={job} post={post} />}
    <Box sx={{ width: '90vw', position: 'Absolute', bottom: '10%', left: '5vw'  }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              style={{color: 'white'}}
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext} style={{color: 'white'}}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </>
  );
}