import './App.css';
// import voice from './music/صوت انذار(MP3_320K).mp3'
import { useState } from 'react';
let r = "";
let r2 =  "";



function App() {



  let [minuts , setmnuts] = useState(0);
  let [second , setsecond] = useState(59);


  let [minuts2 , setmnuts2] = useState(0);
  let [second2 , setsecond2] = useState(59);


  let[selected , setselected] = useState(false)



  function BigInt()
  {
  
    if(r2 !== "")
    {
      clearInterval(r2)
      r2 = ""
      // document.getElementById('audio2').pause();
    }

    
    if(r === "")
    {
        r =  setInterval(() => {
          setsecond(second -= 1)
          if(second <= 0 )
          {
              setsecond(second+=59)
              if(minuts >  0)
              {
                  setmnuts(minuts-=1)
              }
              else
              {
                clearInterval(r)
                setsecond(0)
              }
          }
          if(second <= 9 && minuts  == 0)
          {
              // document.getElementById('audio1').play();
          }

          if (second <= 1 && minuts  == 0)
          {
            // document.getElementById('audio1').pause();
            setselected(true)
          }

        }, 1000);        
    }
  }


  function BigInt2()
  {
    if(r !== "")
    {
      clearInterval(r)  
      document.getElementById('audio1').pause();
      r = ""
    }

    if(r2 === "")
    {
    
        r2 =  setInterval(() => {

          setsecond2(second2 -= 1)

          if(second2 <= 0 )
          {
              setsecond2(second2+=59)
              if(minuts >  0)
              {
                  setmnuts2(minuts2-=1)
              }
              else
              {
                clearInterval(r)
                setsecond2(0)
              }
          }

          if(second2 <= 9 && minuts2  == 0)
          {
              // document.getElementById('audio1').play();
          }

          if (second2 <= 1 && minuts2  == 0)
          {
            // document.getElementById('audio1').pause();
            setselected(true)
          }

        }, 1000);        
    }
  }


  return (
    <div className="App">



<div className='cheesetime'>
        <select disabled={selected ? true : false} onChange={(e)=>{setmnuts(e.target.value) ; setmnuts2(e.target.value)}}>
          <option selected={selected ? true : false}></option>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>4</option>
          <option>9</option>
          <option>14</option>
          <option>19</option>
          <option>29</option>
        </select>
    </div>

    <button onClick={()=>{
        clearInterval(r2)
        clearInterval(r)
        r = ""
        r2 = ""
        // document.getElementById('audio1').pause();
        // document.getElementById('audio2').pause();
      
    }}>pause</button>




    <div className='players'>

        <div className='player1'>
            <label>{minuts2} : {second2}</label>
            {/* <button disabled = { ((second2 === 0 && minuts2 === 0) ||(second === 0 && minuts === 0)) && true}  onClick={()=>{BigInt() ; setsecond(second -= 1)}}>Click</button> */}
            <button disabled = { ((second2 === 0 && minuts2 === 0) ||(second === 0 && minuts === 0)) && true}  onClick={()=>{BigInt()}}>Click</button>
        </div>

        <div  className='player2'>  
            <label>{minuts} : {second}</label>
            {/* <button disabled = { ((second2 === 0 && minuts2 === 0) ||(second === 0 && minuts === 0)) && true}  onClick={()=>{BigInt2() ; setsecond2(second2 -= 1)}}>Click</button> */}
            <button disabled = { ((second2 === 0 && minuts2 === 0) ||(second === 0 && minuts === 0)) && true}  onClick={()=>{BigInt2()}}>Click</button>
        </div>
    </div>
  
  {/* <audio id='audio1'>
      <source src={voice}   type='audio/mpeg'  />
  </audio>
  <audio id='audio2'>
      <source src={voice}   type='audio/mpeg'  />
  </audio> */}

        
    </div>
  );
}

export default App;
