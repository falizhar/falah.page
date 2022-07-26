import React from 'react';
import { Information } from '../../components/index';
import './workExperience.css';

const workData = [
  {
    title: 'SwipeRx',
    job: 'Jr. Fullstack Developer',
    tenure: 'Nov 2021 - Now',
    text: [
      { p: 'Assigned to the SwipeRx Commerce team to develop front-end and back-end functionality, bug fixes, and create new features in an Agile/Scrum environment.\n'
          + 'Maintain legacy code written on Express.js with JavaScript.\n'
          + 'Actively participated in code reviews with DRY/SRP/KISS/YAGNI principles.\n'
          + 'Gained feedback from senior engineers and experience in writing scalable code. \n' },
      { p: 'Technology used:' },
      { ul: 'Nest.js, Express.js, React.js, Lodash' },
      { ul: 'MySQL, Redis, MongoDB, Sequelize ORM.' },
      { ul: 'TypeScript, JavaScript (ES6+), Node.js, SQL, HTML/CSS.' },
      { ul: 'Azure DevOps/VSTS for deployment, Google Cloud Scheduler, Google Pub/Sub.' },
      { ul: 'Git (Bitbucket), Jira, NPM, Yarn, Docker, Prettier, ESLint (AirBnB style), REST API using Swagger, Trello, Keycloak, Docker (local).' },
    ],
  },
  {
    title: 'Stockbit & Bibit',
    job: 'Tech Recruiter',
    tenure: 'Apr 2021 - Jul 2021',
    text: [
      { p: 'Handled all aspects of hiring for software development, product, and data. Approached passive candidates and kept track of all applicants as well as kept applicants informed on the process using Workable ATS. Created summaries of the candidates\' technical exams and coordinated with hiring managers. \n' },
      { p: 'Selected contributions:' },
      { ol: 'Successfully hired eight candidates for hard-to-fill roles such as Tech Lead, Data Engineer, UI/UX Designer, Data Analyst, and Business Intelligence Developer within three weeks. ' },
      { ol: 'Prioritized organic and internal sources for the recruitment process to efficiently save budgets (estimated to have saved 10,000+ USD from external recruitment fees).\n' },
      { ol: 'Initiated Employer Branding ideas such as updating company profiles on Glassdoor and making content for @stockbibitlife on Instagram as well as updating Stockbit and Bibit.id company profiles on LinkedIn.' },
    ],
  },
  {
    title: 'SwipeRx',
    job: 'Technical Recruiter',
    tenure: 'Apr 2020 - Apr 2021',
    text: [
      { p: 'Take ownership of the entire recruitment process for the tech, data, and product; from salary market research, sourcing, job-posting, HR interview & coding test, salary & offer management, until onboarding. Sourced potential candidates in the APAC region using LinkedIn, Naukri, Jobstreet, Glints, Techinasia, etc.\n' },
      { p: 'Selected contributions:' },
      { ol: 'Hired twenty tech-candidates for roles such as Technical Architect/Engineering Manager, Fullstack Developer, QA Engineer, Data Engineer, Data Analyst, Product Manager, and UI/UX.\n' },
      { ol: 'Suggested to reduce using headhunter services, and rely on internal efforts in tech-hiring to save budgets. (Estimated to have saved 39,730 USD from recruitment fees).\n' },
      { ol: 'Trained and supervised two HR staff in end-to-end HR processes such as HR administration, non-tech recruitment, people development, employee engagement, monthly town-hall, etc.\n' },
    ],
  },
  {
    title: 'Glints',
    job: 'Associate Consultant',
    tenure: 'Oct 2019 - Apr 2020',
    text: [
      { p: 'Provided recruitment services to clients and was responsible for understanding their recruitment needs. Also, worked vigorously to earn customers’ trust and sourced potential talents and understood their career needs. ' },
      { p: 'Selected contributions:' },
      { ol: 'Successfully placed 9 candidates for 6 clients in various technical positions such as System Analyst, Back-end Engineer, Full-Stack Developer, Technical Consultant, DevOps, and Mobile Developer.\n' },
      { ol: 'Contributed to the company’s revenues of 14,000+ USD as an individual contributor.' },
      { ol: 'Proposed using LinkedIn Premium Features: Recruiter Lite, and taught the recruiters how to use it.\n' },
    ],
  },
  {
    title: 'Impactfind',
    job: 'Talent Acquisition Intern',
    tenure: 'Jul 2019 - Sep 2019',
    text: 'Provided recruitment services to clients under the direction of a mentor. Trained to be a talent sourcer for software development openings and approached passive applicants on LinkedIn who matched the job requirements. The CV-Sent target was met with an average of 200 percent.',
  },
];

const WorkExperience = () => (
  <div className="features section__padding" id="experience">
    <div className="features-heading">
      <h1 className="gradient__text">Work Experience</h1>
    </div>
    <div className="features-container">
      {workData.map((item, index) => (
        <Information title={item.title} text={item.text} job={item.job} tenure={item.tenure} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default WorkExperience;
