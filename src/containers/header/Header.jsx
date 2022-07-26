import React from 'react';
import { TypedHooks } from '../../components/hooks/typedHooks';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Falah Sultan Alizhar</h1>
      <h2 className="gradient__text">
        <TypedHooks
          strings={[
            'Technical Recruiter',
            'Fullstack Developer',
            'Self-taught Learner',
          ]}
          loop
        />
      </h2>
      <div className="header-content__input">
        <button type="button">
          <a
            href="https://drive.google.com/file/d/1HjmLxieuD8QrNWT6iwUrY8jLo7Mbv29D/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          > Download Resume
          </a>
        </button>
      </div>
    </div>

    <div className="header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
