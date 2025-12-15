// import React, { useState } from "react";

// function CreateUser() {
//   const [name, setName] = useState("");
//   const [job, setJob] = useState("");
//   const [responseData, setResponseData] = useState(null);

//   const handleSubmit = () => {
//     fetch("https://reqres.in/api/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, job }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setResponseData(data); // Response ko state me save
//       })
//       .catch((err) => console.error("Error:", err));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Create User (POST API)</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{ marginRight: "10px" }}
//       />
//       <input
//         type="text"
//         placeholder="Job"
//         value={job}
//         onChange={(e) => setJob(e.target.value)}
//         style={{ marginRight: "10px" }}
//       />
//       <button onClick={handleSubmit}>Create User</button>

//       {responseData && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Response from API:</h3>
//           <pre>{JSON.stringify(responseData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CreateUser;
