import React from 'react';
import './App.css';
import Header from "./main-page/Header";
import Featuredhouse from "./main-page/Featuredhouse"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const fetchHouses=()=>{
    fetch('houses.json')
    .then(rsp=>rsp.json())
    .then(allHouses=>{
      this.allHouses=allHouses;
      this.determineFeaturedHouse();
      this.determineUniqueCountries();
    })
  }
  const determineFeaturedHouse = () => {
    if (this.allHouses) {
        const randomIndex = Math.floor(Math.random() * this.allHouses.length);
        const featuredHouse = this.allHouses[randomIndex];
        this.setState({ featuredHouse });
    };
}
const determineUniqueCountries = () => {
  const countries = this.allHouses
      ? Array.from(new Set(this.allHouses.map(h => h.country)))
      : [];
  countries.unshift(null);
  this.setState({ countries });
}

const filterHouses = (country) => {
  this.setState({ activeHouse: null });
  const filteredHouses = this.allHouses.filter((h) => h.country === country);
  this.setState({ filteredHouses });
  this.setState({ country });
}
return (
    <div className="App">
  <Header />
  <Featuredhouse house={this.state.featuredHouse} />
    </div>
  );
}

export default App;
