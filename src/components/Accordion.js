import React, { useState } from "react";
import "./CalBox.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// const Accordion = ({ question, answer }) => {} can also do this after ES6

const MyAccordion = () => {
  var [show, setshow] = useState(false);
  function toggler() {
    setshow(!show);
  }

  return (
    <>
      <div className="accordion">
        <h2 className="accordion-details">
          <button className="Details" onClick={toggler}>
            {!show ? "Show Details" : "Hide Details"}
            <span>
              {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </span>
          </button>
        </h2>
        {/* If show is true show value else no */}
        {show && (
          <>
            {
              <div className="hidden-apy">
                <p>APY</p>

                <p className="apy-num">9.0%</p>
              </div>
            }
          </>
        )}
        {show && (
          <>
            {
              <ul className="AccordionList">
                <li>Calculated based on current rates</li>
                <li>
                  All figures are estimates provided for your convenience only,
                  and by no means represent guaranteed returns
                </li>
                <li>
                  asdk lfjlaskdjfaskldj fskadlf js akd jasl dsfasfsdafsa
                  dfkdfjksa kljkljkllksd afjfsdf sdaf asdfsd
                </li>
                <li>asdk lfjlaskdjf askldjf skadlfjsakdj afasdfsd</li>
              </ul>
            }
          </>
        )}
      </div>
    </>
  );
};
export default MyAccordion;
