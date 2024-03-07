import React, { useState } from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Index from "./Pages";
// import Login from "./Pages/login";
// import Registration from "./Pages/registration";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/registration" element={<Registration />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import axios from "axios";
const App = () => {
  //get request-String
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post request-String
  const data = "Hello";
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post request-form
  const [formData, setFormData] = useState("");
  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.Data);
    document.getElementById("para").innerHTML = response.Data;
  };
  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br />

      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para"></p>
      <br />

      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        ></input>
        <input type="submit" value="Test Form"></input>
      </form>
    </div>
  );
};
export default App;
