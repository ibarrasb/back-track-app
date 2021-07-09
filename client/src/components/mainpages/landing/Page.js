import React from 'react';
import './landing.css'
import Button from '@material-ui/core/Button';




function Page() {





    return (
        <div className="info">
          <h1 className="title">Welcome to Shower Thoughts</h1> 
       
          <h3 className="landing-text">Where you can speak freely and ask any question you can think of without judgement. </h3>
          <p className="landing-texts">We've all had a "shower thought" or two. They're the fleeting thoughts you have while doing something mundane, like taking a shower or mowing the lawn. They're the miniature epiphanies that occur when your brain is occupied with doing something else, but suddenly you realize that you've come up with a totally unique way of thinking</p>
       
          <div className="btn-c">
            <Button color="primary" href="/register" variant="contained" className="btn-c">REGISTER</Button>
          </div>  
        </div>
    );
}

export default Page;