import CalBox from "./components/CalBox";
import "./components/CalBox.css";
import "./App.css";
import { useState } from "react";
function App() {
  const [showCal, setShowCal] = useState(true);
  // const xyz = () => {
  //   setShowCal(!showCal);
  //   if (showCal) {
  //     return <CalBox />;
  //   } else {
  //     return;
  //   }
  // };
  return (
    <>
      <div className="headArea">
        <h1 className="header">ROI Calculator UI using ReactJS</h1>
        <button className="submit" onClick={() => setShowCal(!showCal)}>
          Open ROI calculator
        </button>
        <div className="boxArea">
          <div className="boxHeader">
            <h2>ROI Calculator</h2>
            <button className="cancel" onClick={() => setShowCal(false)}>
              X
            </button>
          </div>

          {showCal === true ? <CalBox /> : <></>}
        </div>
      </div>
    </>
  );
}

export default App;
