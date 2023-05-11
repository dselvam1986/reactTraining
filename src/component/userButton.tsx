import React,  { useState } from "react";
  
const UserButton = () => {
    const [count, setCount] = useState(0);
  const fireEvent = () =>{
    const event = new CustomEvent('reactBtnClick', {
      detail: {message: 'React fired event to angular component', numClick: count}
    })

    console.log(event)
    window.dispatchEvent(event);
  }

    return (
        <div>
            <button onClick={() => {setCount(count + 1); fireEvent()}}>Fire Event </button>
        </div>
      );
};
  
export default UserButton;