import React from "react";
import "../App.css"
import DateTimePicker from "react-datetime-picker";
import {useState, useEffect} from "react"
export const CheckoutCard = ({ title, image }) => {
  const [startvalue, onChangeStart] = useState(null);
  const [endvalue, onChangeEnd] = useState(null);
  const [setupvalue, onChangeSetup] = useState(null);
  console.log(startvalue, endvalue, setupvalue)
 

  useEffect(() => {

    if (startvalue !== null && endvalue !== null && setupvalue !== null) {
         if (startvalue > endvalue) {
           alert("Start Date cannot be after End date");
           onChangeEnd(null);
           onChangeSetup(null);
           onChangeSetup(null);
         }

         if (setupvalue > startvalue) {
           alert("Setup sholud be done before start event");
           onChangeEnd(null)
           onChangeSetup(null)
           onChangeSetup(null)
         }
    }
   
    
  }, [startvalue, endvalue, setupvalue])
  
  const left = (a,b) => {
    return Math.round((a - b) / (1000 * 60 * 60 * 24));
  }

  return (
    <div>
      <img src={image} alt="pic" className="gamecardImg1" />
      <h1>{title}</h1>
      <h2>
        {startvalue !== new Date() && endvalue !== new Date()
          ? left(endvalue, startvalue) + "Days remaining"
          : null}
      </h2>
      <div className="optionsDiv">
        <div>
          <p>Event Start Date</p>
          <DateTimePicker
            onChange={onChangeStart}
            value={startvalue}
            style={{
              position: "relative",
            }}
          />
        </div>
        <div>
          <p>Event End Date</p>
          <DateTimePicker
            onChange={onChangeEnd}
            value={endvalue}
            style={{
              position: "relative",
            }}
          />
        </div>
        <div>
          <p>Event Setup Date</p>
          <DateTimePicker
            onChange={onChangeSetup}
            value={setupvalue}
            style={{
              position: "relative",
            }}
          />
        </div>
        <div>
          <select>
            <option>Payment Method..</option>
            <option>UPI</option>
            <option>CARD</option>
            <option>CASH</option>
          </select>
        </div>
        <div>
          <button className="Enqbtn">ENQUIRY</button>
        </div>
      </div>
    </div>
  );
};
