//import CountryDetails from "./CountryDetails";
import CountryName from "./CountryName";

const CountryList = ({ listOfCountries }) => {
  return (
    <div>
      {listOfCountries.map((x) => (
        <CountryName key={x.cca2} x={x} />
      ))}
    </div>
  );
};

export default CountryList;
