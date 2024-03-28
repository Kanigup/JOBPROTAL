// CompanyProfile.js

import React, { useContext } from "react";
import JobHeader from "./JobHeader";
import JobDetail from "./JobDetail";
import { useParams } from "react-router-dom";
import { AllFunction } from "../../store/store";
const JobProfile = () => {
  const jobId = useParams();
  const jobIdInt = parseInt(jobId.JobId.replace(/[^0-9]/g, ""), 10);
  const { allJobs } = useContext(AllFunction);
  const data = allJobs.filter((job) => {
    return jobIdInt === job.JobId;
  });
  return (
    <div>
      <JobHeader jobId={jobIdInt}></JobHeader>
      <JobDetail job={data[0]}></JobDetail>
    </div>
  );
};

export default JobProfile;
