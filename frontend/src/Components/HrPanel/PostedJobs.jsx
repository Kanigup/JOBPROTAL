import React, { useState } from "react";
import "./PostedJobs.css";
import axios from "axios";
import { toast } from "react-toastify";
export default function PostedJobs({ job }) {
  // console.log(job);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const [formData, setFormData] = useState({
    JobId: job.JobId,
    JobTitle: job.JobTitle,
    JobDescr: job.JobDescr,
    JobExperience: job.JobExperience,
    MiniEducat: job.MiniEducat,
    City: job.City,
    Role: job.Role,
    Salary: job.Salary,
    JobType: job.JobType,
    workLocation: job.workLocation,
    lastDate: job.lastDate, // Add new state for work location
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/updateJob", formData).then((res) => {
      if (res.data.Status === "Success") {
        toast.success("Updated successfully");
      } else {
        toast.error(res.data.Error);
      }
    });

    setIsPopupOpen(false);
  };
  return (
    <div className="main mt-4">
      <div className="w-[20%]">
        <h1 className="p-1 text-xm font-bold">{job.JobTitle}</h1>
        <h2 className="p-1">{job.City}</h2>
      </div>
      <div className="vertical-line"></div>
      <div className="w-[12%]">
        <h1 className="p-1 text-xm font-bold">Posted Date</h1>
        <h1 className="p-1">{new Date(job.PostDate).toLocaleDateString()}</h1>
      </div>
      <div className="vertical-line"></div>
      <div className="w-[12%]">
        <h1 className="p-1 text-xm font-bold">All Candidate</h1>
        <h1 className="p-1">{job.application}</h1>
      </div>
      <div className="vertical-line"></div>
      <div className="w-[12%]">
        <h1 className="p-1 text-xm font-bold">Last Date</h1>
        <h1 className="p-1">{new Date(job.lastDate).toLocaleDateString()}</h1>
      </div>
      <div className="vertical-line"></div>
      <div className="w-[10%]">
        <button
          className="btn btn-secondary btn-lg mt-2 h-[65%] pt-1"
          onClick={openPopup}
        >
          Update
        </button>
      </div>
      {isPopupOpen && (
        <div className="popup-wrapper mt-4">
          <div className="popup">
            <button className="close-btn" onClick={closePopup}>
              X
            </button>
            <div className="edit1">
              <div className="col-lg-8 w-full">
                <form className="jobform" onSubmit={handleSubmit}>
                  <div className="form-row" style={{ marginLeft: "100px" }}>
                    {/* Existing input fields */}
                    {/* Job Title */}
                    <div className="form-group col-md-10">
                      <label>Job Title:</label>
                      <input
                        type="text"
                        name="jobTitle"
                        className="form-control"
                        value={formData.JobTitle}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Experience */}
                    <div className="form-group col-md-10">
                      <label>Experience:</label>
                      <input
                        type="text"
                        name="experience"
                        className="form-control"
                        value={formData.JobExperience}
                        onChange={handleChange}
                      />
                    </div>
                    {/* City */}
                    <div className="form-group col-md-10">
                      <label>City:</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={formData.City}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Salary */}
                    <div className="form-group col-md-10">
                      <label>Salary:</label>
                      <input
                        type="text"
                        name="salary"
                        className="form-control"
                        value={formData.Salary}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Job Description */}
                    <div className="form-group col-md-10">
                      <label>Job Description:</label>
                      <textarea
                        name="jobDescription"
                        className="form-control"
                        value={formData.JobDescr}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    {/* Minimum Education */}
                    <div className="form-group col-md-10">
                      <label>Minimum Education:</label>
                      <input
                        type="text"
                        name="minimumEducation"
                        className="form-control"
                        value={formData.MiniEducat}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Role */}
                    <div className="form-group col-md-10">
                      <label>Role:</label>
                      <input
                        type="text"
                        name="role"
                        className="form-control"
                        value={formData.Role}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Job Type */}
                    <div className="form-group col-md-10">
                      <label>Job Type:</label>
                      <select
                        name="jobType"
                        className="form-control"
                        value={formData.JobType}
                        onChange={handleChange}
                      >
                        <option value="">Select Job Type</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Full Time">Full Time</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                    {/* Work Location */}
                    <div className="form-group col-md-10">
                      <label>Work Location:</label>
                      <select
                        name="workLocation"
                        className="form-control"
                        value={formData.workLocation}
                        onChange={handleChange}
                      >
                        <option value="">Select Job Location</option>
                        <option value="wfh">Work from home</option>
                        <option value="office">Office work</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>
                    <div className="form-group col-md-10">
                      <label>Last Date:</label>
                      <input
                        type="date"
                        name="lastDate"
                        className="form-control"
                        value={formData.lastDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 text-center mt-4">
                      <button type="submit" className="btn btn-primary w-[30%]">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="backdrop"></div>
        </div>
      )}
    </div>
  );
}
