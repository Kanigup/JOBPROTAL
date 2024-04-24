// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { imageDb } from "../../firebase";
// import { v4 } from "uuid";

// const Temp = () => {
//   const [logo, setLogo] = useState(null);
//   const [LogoURL,setLogoURL]=useState();
//   const navigate = useNavigate();

//  const [formData, setFormData] = useState({
//     compName: "",
//     address: "",
//     hrname: "",
//     aadhar: "",
//     email: "",
//     contact: "",
//     logo: "",
//     web: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!logo)
//     {
//       return;
//     }
//     else{
//          const imageRef = ref(imageDb, files/Logo${v4()});
//           uploadBytes(imageRef, logo).then((snapshot) => {
//           getDownloadURL(snapshot.ref).
//           then((downloadURL) => {
//             console.log("File available at", downloadURL);
//             setLogoURL(downloadURL); // Set the download URL in state
//           })
//           .catch((error) => {
//             console.error("Error getting download URL:", error);
//           });
//         })
//         .catch((error) => {
//           console.error("Error uploading file:", error);
//         });
//     }
//     console.log(LogoURL);

//     console.log(formData);
//     const data = new FormData();
//     data.append("name", formData.hrname);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("adhar", formData.aadhar);
//     data.append("CompName", formData.compName);
//     data.append("CompAdd", formData.address);
//     data.append("CompPhone", formData.contact);
//     data.append("web", formData.web);
//     data.append("logo", LogoURL);

//     axios
//       .post("/postdata-hr", data)
//       .then((res) => {
//         if (res.data.Status === "Success") navigate("/companylogin");
//         else alert(res.data.Error);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setLogo(e.target.files[0]);
//    };

//   return (
//     <div className="container  justify-content-center align-items-center">
//       <div className="card p-4" style={{ width: "575px", background: "#333" }}>
//         <center>
//           <h3 className="text-white mb-4">Registration Form</h3>
//         </center>
//         <form onSubmit={handleSubmit}>
//           <div className="row mb-3">
//             <div className="col">
//               <label className="form-label text-white">Company Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="compName"
//                 name="compName"
//                 placeholder="Company Name"
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col">
//               <label className="form-label text-white">Company Address</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address"
//                 name="address"
//                 placeholder="Street Address"
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col">
//               <label className="form-label text-white">Recruiter Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="hrname"
//                 name="hrname"
//                 placeholder="Name"
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="row mb-3">
//             <div className="col">
//               <label className="form-label text-white">Aadhar Number</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="aadhar"
//                 name="aadhar"
//                 placeholder="Aadhar number"
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="row mb-3">
//             <div className="col">
//               <label className="form-label text-white">Company Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col">
//               <label className="form-label text-white">Contact Number</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="contact"
//                 name="contact"
//                 placeholder="Contact Number"
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col">
//               <label className="form-label text-white">Company website</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="web"
//                 name="web"
//                 placeholder="Enter Company website"
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col">
//               <label className="form-label text-white">
//                 Upload Company Logo
//               </label>
//               <input
//                 type="file"
//                 className="form-control"
//                 id="logo"
//                 name="logo"
//                 placeholder="Upload Company logo"
//                 accept="image/*"
//                 onChange={handleFileChange}
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col">
//               <label className="form-label text-white">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <button type="submit" className="btn btn-dark w-100 mb-2 bg-primary">
//             REGISTER
//           </button>
//         </form>

//         <p className="mt-2 text-white">
//           Already have an account?
//           <Link to="/companylogin" className="text-decoration-none text-white">
//             {" "}
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Temp;
