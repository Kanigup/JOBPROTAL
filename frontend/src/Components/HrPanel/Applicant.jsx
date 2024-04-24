import React, { useState } from "react";

function Applicant({ applicant }) {
  // const [isOpen, setOpen] = useState(false);
  // console.log(applicant.Resume);
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>{applicant.JsFName + " " + applicant.JsLName}</td>
        <td>{applicant.JsEmail}</td>
        <td>{applicant.Phone}</td>
        <td>
          <button>Resume</button>
        </td>
      </tr>
    </>
  );
}

export default Applicant;
