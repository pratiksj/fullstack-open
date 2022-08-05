import { useState } from "react";
import CountryDetails from "./CountryDetails";
const CountryList = ({ x }) => {
  const [showButton, setshowButton] = useState(false);

  const showToggle = () => {
    setshowButton(!showButton);
  };

  return (
    <div key={x.cca2}>
      <span>{x.name.common}</span>
      <div>
        {showButton === true ? (
          <>
            <CountryDetails x={x} />
            <button
              onClick={() => {
                setshowButton(false);
              }}
            >
              Hide
            </button>
          </>
        ) : (
          <button onClick={showToggle}>Show</button>
        )}
      </div>

      {/* <CountryDetails x={x} /> */}
    </div>
  );
};
export default CountryList;
