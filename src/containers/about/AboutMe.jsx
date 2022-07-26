import React from 'react';
import { Information } from '../../components/index';
import './aboutMe.css';

const AboutMe = () => (
  <div className="personal-cv__about section__margin" id="about">
    <div className="whatgpt3-feature">
      <Information title="About Me" />
    </div>
    <div className="whatgpt3-heading">
      <h1 className="gradient__text">Most tech recruiters that interview tech talent have no experience with software development, but I do. </h1>
      <div className="whatgpt3-heading-col">
        <p className="regular__text">With expertise as a Fullstack Developer and two years as a Technical Recruiter, he
          is qualified to conduct an in-depth technical interview and supervise candidates&apos; technical exams or coding tests.
          Consider how these experiences could help the tech team save time, improve candidates&apos; experiences, and increase hiring success.
        </p>
        <br />
        <p className="regular__text"> Given today&apos;s information availability, he loves to learn
          new skills by reading, watching, and practicing online. Furthermore, his experience in multinational tech
          recruitment allowed him to listen to people&apos;s stories from varied backgrounds and learn from them,
          particularly in software engineering, product management, and data team.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
