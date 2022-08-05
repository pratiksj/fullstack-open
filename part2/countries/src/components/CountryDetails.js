const CountryDetails = ({ x }) => {
  return (
    <div key={x.tld}>
      <h3>Country: {x.name.common}</h3>
      <p>Capital: {x.capital}</p>
      <>Area: {x.area}</>
      <h4>languages:</h4>
      <ul>
        {Object.keys(x.languages).map((language, index) => (
          <li key={index}>{x.languages[language]}</li>
        ))}
      </ul>
      {/* <p>{x.flag}</p> */}
      <p>Flag:</p>
      <img
        style={{ height: "300px", width: "300px" }}
        alt="Country Flag"
        src={x.flags.svg}
      />
    </div>
  );
};
export default CountryDetails;
