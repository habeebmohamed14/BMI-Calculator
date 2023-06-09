import React, { useState } from 'react';
// import { BsFill7CircleFill } from 'react-icons/fa';
import { AiFillApple } from "react-icons/ai";
import { BsFillAirplaneEnginesFill} from "react-icons/bs";
const Bmi = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (e) => {
    e.preventDefault();

    if (height === 0 || weight === 0) {
      alert('Please enter a valid height and weight');
    } else {
      let bmi = height / (weight * weight) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are healthy weight');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className='container'>
      <h1>BMI Calculator</h1>
      <form onSubmit={calcBmi}>
        <div>
          <label>Height (in)</label>
          <input
            type="text"
            placeholder='Enter height value'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label>Weight (lbs)</label>
          <input
            type="text"
            placeholder='Enter weight value'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className='give'>
          <button type="submit" class="btn btn-success">Submit</button>
          <button type="button" class="btn btn-primary" onClick={reload}>Reload</button>
        </div>
        <div className='center'>

          <h1>Your BMI is: {bmi}</h1>
          {message}
        </div>
      </form>

      {/* <BsFill7CircleFill /> */}
     < AiFillApple/>
     <BsFillAirplaneEnginesFill/>
    </div>
  );
};
export default Bmi;
