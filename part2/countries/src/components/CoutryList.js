//import CountryDetails from "./CountryDetails";
import CountryName from "./CountryName";

const CountryList = ({ listOfCountries }) => {
  return (
    <div>
      {listOfCountries.map(
        (x) => (
          <CountryName x={x} />
        )
        // <div key={x.cca2}>
        //   <span>{x.name.common}</span>
        //   <button>Submit</button>
        //   {/* <CountryDetails x={x} /> */}
        // </div>
      )}
    </div>
  );
};

export default CountryList;
