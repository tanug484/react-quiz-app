import { useState,useEffect } from 'react';
import './App.css';
import {data} from './data'
function App() {
  const [count,setCount]= useState(1);
  const {question,answers,correctIndex}=data[count-1];
  const [score,setScore]=useState(false);
  const [value,setValue]=useState(0);
  const length=data.length;
  const handleClick=(index)=>{
    if(index==correctIndex)
    {
      
      setValue(value+1)
    }
   if(count<length)
   {
      setCount(count+1);
   }
   else{
     alert("You have completed the quiz successfully.Please wait for the result..😊");
     setScore(!score)
   }
  }
const handleRetake=()=>{
setScore(false)
setCount(1)
setValue(0)

}

  return<>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
       {!score? <div className='col-md-4 Quiz'>
          <h4>{`Question ${count}/${length}`}</h4>
            <p>{`${question}`}</p>
            {answers.map((answers,index)=>{
              return <div key={index} className='display'>
                <button className='btn-answer' onClick={()=>handleClick(index)}>{answers}</button>
              </div>
            })}
          {/* <button className='btn btn-primary click' onClick={handleClick}>Next</button> */}
        </div>:<div className='col-md-4 Quiz'>
          <h3>{`You have scored ${value}/${length}`}</h3>
          {value>7 ? <h3 className='pass'>
          Congratulations you have cleared quiz with good marks..🎉</h3>:
          <div>
           <h3 className='pass'>You have failed the test..Oh no..🤦‍♂️</h3>
            <button className='btn btn-primary take' onClick={handleRetake}> 
            Re-take Quiz</button>
          </div>
         }
          </div>}
        <div className='col-md-4'></div>
      </div>
    </div>
  </>
}


export default App;