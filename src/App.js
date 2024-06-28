import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setvalue] =useState("");

  const handleClick = (val) => {
    if (val === 'AC') {
      setvalue('');
    } else if (val === 'DE') {
      setvalue(value.slice(0, -1));
    } else if (val === '=') {
      try {
        setvalue(eval(value).toString());
      } catch (error) {
        setvalue('Error');
      }
    } else {
      setvalue(value + val);
    }
  };
  
  return (
    
    <div className="App">
        <div className='container'>
           <div className='calculater'>
            <form action='' >
              <div className='display'>
                <input type='text' value={value} />
              </div>
              <div>
              <input type='button' value="AC" onClick={() => handleClick('AC')} />
              <input type='button' value="DE" onClick={() => handleClick('DE')} />
              <input type='button' value= "." onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "/" onClick={e => setvalue(value + e.target.value)}/>
              </div>
              <div>
              <input type='button' value= "7" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "8" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "9" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "*" onClick={e => setvalue(value + e.target.value)}/>
              </div>
              <div>
              <input type='button' value= "4" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "5" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "6" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "+" onClick={e => setvalue(value + e.target.value)}/>
              </div>
              <div>
              <input type='button' value= "1" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "2" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "3" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "=" onClick={e => setvalue(value + e.target.value)}/>
              </div>
              <div>
              <input type='button' value= "00" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "0" onClick={e => setvalue(value + e.target.value)}/>
              <input type='button' value= "=" className='equal' onClick={e => setvalue(eval(value))}/>
              </div>
            </form>
           </div>
        </div>
        </div>
  );
}

export default App;
