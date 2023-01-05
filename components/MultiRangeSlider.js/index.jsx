import React from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";
import { useState, useRef, useCallback, useEffect} from "react";

function MultiRangeSlider({min, max, onChange}) {
    // Creating the state variables
   const [minVal, setMinVal] = useState(min);
   const [maxVal, setMaxVal] = useState(max);

// Creating the refs
    const minValRef = useRef(null);
    const maxValRef = useRef(null);

    // Create a ref
    const range = useRef(null);

    // Convert to percentage
const getPercent = useCallback((value) => {
    Math.round(((value - min) / (max - min)) * 100);
}, [min, max]);


// Set width of the range to decrease from the left side
useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); 
  
      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);


  // Set width of the range to decrease from the right side
useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);
  
      if (range.current) {
       range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  
// Get min and max values when their state changes
useEffect(() => {
    onChange({ min: minVal, max: maxVal });
}, [minVal, maxVal, onChange]);

    return (
        <div>
        <p  className="text-[1.71rem] text-[#292929] font-Satoshi">${minVal.toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2})} - ${maxVal.toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2})}</p>
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={(event) => {
                const value = Math.min(+event.target.value, maxVal - 1);
                setMinVal(value);
                event.target.value = value.toString();
              }}
              className={classnames("thumb thumb--zindex-3", {
                "thumb--zindex-5": minVal > max - 100
              })}
          />
          <input
             type="range"
             min={min}
             max={max}
             value={maxVal}
             ref={maxValRef}
            onChange={(event) => {
                const value = Math.max(+event.target.value, minVal + 1);
                setMaxVal(value);
                event.target.value = value.toString();
              }}
            className="thumb thumb--zindex-4"
          />

    <div className="slider">
   <div className="slider__track" />
   <div ref={range} className="slider__range"/>
   <div className="slider__left-value">{minVal}</div>
    <div className="slider__right-value">{maxVal}</div>
    </div>
        </div>
      );
};

// Set the type of each prop
MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  };


export default MultiRangeSlider