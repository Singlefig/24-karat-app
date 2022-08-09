import React from "react";
import { Range, getTrackBackground } from "react-range";

import "./Range.css";

export const RangeSlider = ({ style, values, setValues }: { style: string, values: Array<number>, setValues: any }) => {
  const STEP = 1;
  const MIN = 156;
  const MAX = 345667;

  return (
    <Range
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={values => {
        setValues(values);
        console.log(values);
      }}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "24px",
            display: style,
            width: "calc(100% - 20px)",
            marginLeft: 10,
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values,
                colors: ["#9B9B9B", "#D16757", "#9B9B9B"],
                min: MIN,
                max: MAX
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "24px",
            width: "24px",
            borderRadius: "50%",
            backgroundColor: "#FFF",
            display: style,
            justifyContent: "center",
            alignItems: "center",
            border: '1px solid #D16757',
          }}
        />
      )}
    />
  );
};
