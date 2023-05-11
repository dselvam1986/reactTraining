import './App.css';
import React from "react";
import UserButton from './component/userButton';
function App() {

  // const [count, setCount] = useState(0);
  // const fireEvent = () =>{
  //   const event = new CustomEvent('reactBtnClick', {
  //     detail: {message: 'React fired event to angular component', numClick: count}
  //   })

  //   console.log(event)
  //   window.dispatchEvent(event);
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Click Button to fire event with increment count
        </p>
        {/* <button onClick={() => {setCount(count + 1); fireEvent()}}>Fire Event </button> */}
        <UserButton />
      </header>
    </div>
  );
}

export default App;
