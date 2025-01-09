import React, { useState } from "react";
import css from "./App.css"
function App() {
  const [carData, setCarData] = useState({
    numerRejestracyjny: "",
    vin: "",
    kolor: "",
    typWyposazenia: "",
    typNapedu: "",
    moc: "",
    rodzajPaliwa: "",
    waga: "",
    miejscaSiedzace: "",
    statusWlasciciela: "Właściciel",
    imieWlasciciela: "",
    nazwiskoWlasciciela: "",
    adres: "",
    telefon: "",
    email: "",
    plec: "",
  });

  const [cars, setCars] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const istniejaceAuto = cars.find(
      (car) => car.vin === car.vin
    );
    
    if (istniejaceAuto) {
      alert("podany numer Vin jest już używany");
      return;
    }
    setCars([...cars, carData]);
    setCarData({
      numerRejestracyjny: "",
      vin: "",
      kolor: "",
      typWyposazenia: "",
      typNapedu: "",
      moc: "",
      rodzajPaliwa: "",
      waga: "",
      miejscaSiedzace: "",
      statusWlasciciela: "Właściciel",
      imieWlasciciela: "",
      nazwiskoWlasciciela: "",
      adres: "",
      telefon: "",
      email: "",
      plec: "",
    });
  };

  return (
    <div className="App">
      <h1>Informacje o Samochodzie</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Numer Rejestracyjny:</label>
        <input
          type="text"
          name="numerRejestracyjny"
          value={carData.numerRejestracyjny}
          onChange={handleChange}
          required
        />
        <br />
      </div>
      <div className="form-field">
        <label>VIN:</label>
        <input
          type="id"
          name="vin"
          value={carData.vin}
          onChange={handleChange}
          required
        />
        <br />
      </div>
      <div className="form-field">
        <label>Kolor:</label>
        <input
          type="text"
          name="kolor"
          value={carData.kolor}
          onChange={handleChange}
        />
        <br />
        </div>
        <div className="form-field">
        <label>Typ Napędu:</label>
        <select name="typNapedu" value={carData.typNapedu} onChange={handleChange}>
          <option value="">Wybierz</option>
          <option value="Przednia Oś">Przednia Oś</option>
          <option value="Tylnia Oś">Tylnia Oś</option>
          <option value="4x4">4x4</option>
        </select>
        <br />
        </div>
        <div className="form-field">
        <label>Moc:</label>
        <input
          type="text"
          name="moc"
          value={carData.moc}
          onChange={handleChange}
        />
        <br />
        </div>
        <div className="form-field">
        <label>Rodzaj Paliwa:</label>
        <select name="rodzajPaliwa" value={carData.rodzajPaliwa} onChange={handleChange}>
          <option value="">Wybierz</option>
          <option value="Benzyna">Benzyna</option>
          <option value="Diesel">Diesel</option>
          <option value="Elektryczny">Elektryczny</option>
        </select>
        <br />
        </div>
        <div className="form-field">
        <label>Waga:</label>
        <input
          type="text"
          name="waga"
          value={carData.waga}
          onChange={handleChange}
        />
        <br />
        </div>
        <div className="form-field">
        <label>Miejsca siedzące:</label>
        <input
          type="text"
          name="miejscaSiedzace"
          value={carData.miejscaSiedzace}
          onChange={handleChange}
        />
        <br />
        </div>
        <div className="form-field">
        <label>Status Właściciela:</label><br/>
        <br />
        <label>
          <input
            type="radio"
            name="statusWlasciciela"
            value="Właściciel"
            checked={carData.statusWlasciciela === "Właściciel"}
            onChange={handleChange}
          />
          Właściciel
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="statusWlasciciela"
            value="Współwłaściciel"
            checked={carData.statusWlasciciela === "Współwłaściciel"}
            onChange={handleChange}
          />
          Współwłaściciel
        </label>
        <br />
        </div>
        <div className="form-field">
        <label>Imię:</label>
        <input
          type="text"
          name="imieWlasciciela"
          value={carData.imieWlasciciela}
          onChange={handleChange}
        />
        <br />
        </div>
        <div className="form-field">
        <label>Nazwisko:</label>
        <input
          type="text"
          name="nazwiskoWlasciciela"
          value={carData.nazwiskoWlasciciela}
          onChange={handleChange}
        />
        <br />
        </div>
        <div className="form-field">
        <label>Adres:</label>
        <input
          type="text"
          name="adres"
          value={carData.adres}
          onChange={handleChange}
        />
        <br />
        </div>
        <div className="form-field">
        <label>Telefon:</label>
        <input
          type="text"
          name="telefon"
          value={carData.telefon}
          onChange={handleChange}
        />
        <br />
        </div>
        <div className="form-field">
        <label>E-mail:</label>
        <input
          type="text"
          name="email"
          value={carData.email}
          onChange={handleChange}
        />
        <br />
        </div>
        <div className="form-field">
        <label>
          <input
            type="radio"
            name="plec"
            value="Kobieta"
            checked={carData.plec === "Kobieta"}
            onChange={handleChange}
          />
          Kobieta
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="plec"
            value="Mężczyzna"
            checked={carData.plec === "Mężczyzna"}
            onChange={handleChange}
          />
          Mężczyzna
        </label>
        <br />
        </div>
        <div className="form-submit">
        <button type="submit">Dodaj Samochód</button>
        </div>
      </form>

      <h2>Lista Samochodów</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Numer Rejestracyjny</th>
            <th>VIN</th>
            <th>Kolor</th>
            <th>Typ Napędu</th>
            <th>Moc</th>
            <th>Rodzaj Paliwa</th>
            <th>Waga</th>
            <th>Miejsca siedzące</th>
            <th>Status Właściciela</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Adres</th>
            <th>Telefon</th>
            <th>E-mail</th>
            <th>Płeć</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, vin) => (
            <tr key={vin}>
              <td>{car.numerRejestracyjny}</td>
              <td>{car.vin}</td>
              <td>{car.kolor}</td>
              <td>{car.typNapedu}</td>
              <td>{car.moc}</td>
              <td>{car.rodzajPaliwa}</td>
              <td>{car.waga}</td>
              <td>{car.miejscaSiedzace}</td>
              <td>{car.statusWlasciciela}</td>
              <td>{car.imieWlasciciela}</td>
              <td>{car.nazwiskoWlasciciela}</td>
              <td>{car.adres}</td>
              <td>{car.telefon}</td>
              <td>{car.email}</td>
              <td>{car.plec}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;