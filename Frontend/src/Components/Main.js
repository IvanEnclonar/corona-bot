import React, { useEffect, useState } from 'react';
import "./Main.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function Main() {
  const [messages, setMessages] = useState([{
    text: "Hi! I am Coronabot, helping you with information about anything covid, from its definition to the protocols you need to follow :)",
    isFromUser: false,
  }]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
      
      setMessages([...messages,{
        text: input,
        isFromUser: true,
      }]);
      var userInput = input;
      setInput('');

      var formdata = new FormData();
      formdata.append("text", input);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://coronabot-324808-dot-knomad-27606.uc.r.appspot.com/req", requestOptions)
        .then(response => response.text())
        .then(result =>{
          setMessages([...messages, {
            text: userInput,
            isFromUser: true,
          },{
              text: result,
              isFromUser: false,
            }
          ]);
        })
        .catch(error => console.log('error', error));
      }

  return (
    <div className="Main">
      <div className="Main__Header">
          <img src="https://storage.googleapis.com/corona-bot/2.png" className="Main__BotImage"></img>
          <div>
            CoronaBot
          </div>
        </div>
        <div className="Main__Body">
            <div className="Main__TextArea">
              {
                messages.map((currentValue, index) => {
                  return <Message text={currentValue.text} isFromUser={currentValue.isFromUser} id={index}/>
                })
                
              }       
            </div>
            <div className="Main__Input">
                <TextField value={input} onChange={event => setInput(event.target.value)} id="outlined-basic" label="Enter Message" variant="outlined" />
                <Button onClick={() => { sendMessage()}}variant="contained" color="primary" size="large" style={{maxWidth: '80px', maxHeight: '45px', minWidth: '80px', minHeight: '45px'}}>Send</Button>
            </div>
        </div>
    </div>
  );
}

function Message({text, isFromUser, id}){
    return(
        <div className={isFromUser ? "Main__MessOwn Main__MessContainer" : "Main__MessContainer"}>
          <div className={isFromUser ? "Main__OwnMessContainer" : "Main__RespMessContainer"}>
            {text}
          </div>
        </div>
    );
}

export default Main;
