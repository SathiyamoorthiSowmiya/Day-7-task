//!Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//a.Get all the countries from Asia continent /region using Filter method

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const asiaCountries = data.filter((country) => country.region === "Asia");
    console.log("Countries in Asia:");
    asiaCountries.forEach((country) => {
      console.log(country.name.common);
    });
  });

//b.Get all the countries with a population of less than 2 lakhs using Filter method

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countriesWithLowPopulation = data.filter(
      (country) => country.population < 200000
    );
    console.log("Countries with population less than 2 lakhs:");
    countriesWithLowPopulation.forEach((country) => {
      console.log(`${country.name.common}: ${country.population}`);
    });
  });

//c.Print the following details name, capital, flag, using forEach method

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log("Country: ", country.name.common);
      console.log("Capital: ", country.capital);
      console.log("Flag: ", country.flags.png);
      console.log("-------------------------");
    });
  });

//d.Print the total population of countries using reduce method

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const totalPopulation = data.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total population of all countries:", totalPopulation);
  });

//e.Print the country that uses US dollars as currency.

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countryUsingUSD = data.find(
      (country) => country.currencies && country.currencies.USD
    );
    if (countryUsingUSD) {
      console.log("Country that uses US dollars as currency:");
      console.log("Name:", countryUsingUSD.name.common);
      console.log("Currencies:", countryUsingUSD.currencies);
    }
  });
