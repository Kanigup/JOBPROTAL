import React, { useState } from "react";

function Applicant({ applicant }) {
  const [isOpen, setOpen] = useState(false);
  // console.log(applicant.Resume);
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>{applicant.JsFName + " " + applicant.JsLName}</td>
        <td>{applicant.JsEmail}</td>
        <td>{applicant.Phone}</td>
        <td>
          <button
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            Resume
          </button>
        </td>
        <td>
          <button>View Profile</button>
        </td>
      </tr>
      {isOpen && <img src={applicant.Resume}></img>}
    </>
  );
}

export default Applicant;
