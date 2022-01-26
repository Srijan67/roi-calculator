import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Accordion from "./Accordion";
// import Switch from "@mui/material/Switch";
import { styled } from "@mui/system";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import "./CalBox.css";
const blue = {
  500: "#DDD101",
};

const grey = {
  400: "#BFC7CF",
  500: "#AAB4BE",
};

const Root = styled("span")`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 30px;
  height: 15px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 10px;
    height: 10px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 18px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

//root of big Toggler
const bigRoot = styled("span")`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${grey[400]};
    border-radius: 16px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 23px;
    height: 23px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 34px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

const CalBox = () => {
  const [value, setValue] = useState("0.00 USD");
  const [USDValue, setUSDValue] = useState("0.000 USD");
  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };

  return (
    <>
      <div className="boxAreaSec">
        <Scrollbars>
          <div className="boxCenter">
            <div className="unstyledSwitch">
              <span>🎂CAKE</span>
              <SwitchUnstyled
                className="small-toggler"
                component={Root}
                {...label}
                defaultChecked
              />
              <span>USD</span>
            </div>
            <div className="inputUSD">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <span>~CAKE 0.000</span>
              <div className="valueUSD">
                <button>$1000</button>
                <button>$100</button>
              </div>
              <br />
            </div>
            <div className="period">
              <p>Timestamp</p>
              <div className="period_value">
                <label className="period_select">
                  <input
                    type="radio"
                    name="days"
                    className="days_button"
                    defaultChecked
                  />
                  <span>1 Day</span>
                </label>
                <label className="period_select">
                  <input type="radio" name="days" className="days_button" />
                  <span>7 Day</span>
                </label>
                <label className="period_select">
                  <input type="radio" name="days" className="days_button" />
                  <span>30 Day</span>
                </label>
                <label className="period_select">
                  <input type="radio" name="days" className="days_button" />
                  <span>1 Year</span>
                </label>
                <label className="period_select">
                  <input type="radio" name="days" className="days_button" />
                  <span>5 Year</span>
                </label>
              </div>
            </div>
            <div className="APY">
              <p>Enable Accelerated APY</p>
              <div className="switch_APY">
                <SwitchUnstyled
                  className="small-toggler"
                  component={bigRoot}
                  {...label}
                  defaultChecked
                />
              </div>
            </div>
            <div className="tier">
              <p>Select Tier</p>
              <div className="period_value">
                <label className="period_select">
                  <input
                    type="radio"
                    name="tier"
                    className="tier_button"
                    defaultChecked
                  />
                  <span>Tier 1</span>
                </label>
                <label className="period_select">
                  <input type="radio" name="tier" className="tier_button" />
                  <span>Tier 2</span>
                </label>
                <label className="period_select">
                  <input type="radio" name="tier" className="tier_button" />
                  <span>Tier 3</span>
                </label>
                <label className="period_select">
                  <input type="radio" name="tier" className="tier_button" />
                  <span>Tier 4</span>
                </label>
                <label className="period_select">
                  <input type="radio" name="tier" className="tier_button" />
                  <span>Tier 5</span>
                </label>
              </div>
            </div>
            <div className="unstyledSwitch">
              <span>ROI at CurrentRates</span>
            </div>
            <div className="inputUSD">
              <input
                type="text"
                value={USDValue}
                onChange={(e) => setUSDValue(e.target.value)}
              />
              <span>~0.000 CAKE + 0.000000 DON</span>
              <br />
            </div>

            <Accordion />
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
export default CalBox;
