import React, { useState } from "react";
import "./style/style.scss";

// const items: IItems[] = [
//   {
//     id: 1,
//     imgSrc:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDEQWdNMlNxYKT9yULNAak2uu1vxToe_0qXi0y_lTwQ&s",
//     title: "Title 1",
//     description: "Description 1",
//   },
//   {
//     id: 2,
//     imgSrc:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDEQWdNMlNxYKT9yULNAak2uu1vxToe_0qXi0y_lTwQ&s",
//     title: "Title 2",
//     description: "Description 2",
//   },
//   {
//     id: 3,
//     imgSrc:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDEQWdNMlNxYKT9yULNAak2uu1vxToe_0qXi0y_lTwQ&s",
//     title: "Title 3",
//     description: "Description 3",
//   },
//   {
//     id: 4,
//     imgSrc:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDEQWdNMlNxYKT9yULNAak2uu1vxToe_0qXi0y_lTwQ&s",
//     title: "Title 4",
//     description: "Description 4",
//   },
// ];

const App: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("Bangladesh");
  const [date, setDate] = useState<string>("");
  const [checked, setChecked] = useState("Male");

  const handleInputRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleInputAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };
  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSelectCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };
  const handleInputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, "Name");
    console.log(age, "Age");
    console.log(email, "Email");
    console.log(country, "Country");
    console.log(date, "Date");
    console.log(checked, "Checked");
    // Reset form trên giao diện
    (e.target as HTMLFormElement).reset();
    setName("");
    setAge(0);
    setEmail("");
    setCountry("Bangladesh");
    setDate("");
    setChecked("Male");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Student Form</h1>
      <div className="student-form">
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={handleInputName}
        />

        <input
          name="age"
          type="number"
          placeholder="Enter your age"
          onChange={handleInputAge}
        />

        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleInputEmail}
        />

        <div className="field-list">
          <div className="field">
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              name="male"
              value="male"
              checked={checked === "male"}
              onChange={handleInputRadio}
            />
          </div>

          <div className="field">
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="female"
              name="female"
              value="female"
              checked={checked === "female"}
              onChange={handleInputRadio}
            />
          </div>

          <div className="field">
            <label htmlFor="other">Other</label>
            <input
              type="radio"
              id="other"
              name="other"
              value="other"
              checked={checked === "other"}
              onChange={handleInputRadio}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="country">Country</label>
          <select name="country" id="country" onChange={handleSelectCountry}>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="dateOfBirth">Date of birth</label>
          <input
            type="date"
            id="dateOfBirth"
            onChange={handleInputDate}
            name="date"
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default App;
// <div className="item-container">
//   {items.map((item) => (
//     <div className="item" key={item.id}>
//       <img src={item.imgSrc} alt="Item" />
//       <h2>{item.title}</h2>
//       <p>{item.description}</p>
//     </div>
//   ))}
// </div>
