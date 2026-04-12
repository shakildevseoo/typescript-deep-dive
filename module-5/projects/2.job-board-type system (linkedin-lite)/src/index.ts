

//base User

interface User {
    readonly id : number;
    name : string,
    email : string,
    isVerified : boolean
}

interface JobSeeker extends User {
  skills : string[];
  experience : number;
  resumeUrl ?: string
}

type JobType = "remote" | "onsite" | "hybrid";

type  JobInfo = {
    title : string;
    company : string;
    salary : string;
    type  : JobType;
    isOpen : boolean
}

type Employer = {
    emploerName : string
    employerEmail: string
}

type Job = JobInfo & Employer

type ApplicationStatus = "pending" | "accepted" | "rejected"


type Application = {
    job  : Job;
    user : JobSeeker;
    status : ApplicationStatus
}


let jobs  : Job[] = []
let applications : Application[] =[ ]

function createJob (job : Job) : void{
   jobs.push(job)
}

function applyForJob(job  : Job, user : JobSeeker) : Application{
   const application : Application ={
    job,
    user, 
    status: "pending",
   }
applications.push(application);
   return application
}


const user1: JobSeeker = {
  id: 1,
  name: "Shakil",
  email: "shakil@mail.com",
  isVerified: true,
  skills: ["React", "Node", "TypeScript"],
  experience: 2,
  resumeUrl: "https://resume.com/shakil",
};

const job1: Job = {
  title: "Frontend Developer",
  company: "Tech Corp",
  salary: "50000",
  type: "remote",
  isOpen: true,
  emploerName: "John Doe",
  employerEmail: "john@techcorp.com",
};

// add job
createJob(job1);

// apply
const app1 = applyForJob(job1, user1);