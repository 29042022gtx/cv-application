import { useState } from 'react';
import { Info } from './Info';
import '../styles/input.css';

const initEduExp = {
  schoolName: '',
  titileOfStudy: '',
  dateOfStudy: '',
};

function InfoSection({ schoolName, titleOfStudy, dateOfStudy, handleClick }) {
  return (
    <section className="content-wrapper section-wrapper">
      <Info
        title="School name"
        content={schoolName}
      />
      <Info
        title="Title of study"
        content={titleOfStudy}
      />
      <Info
        title="Date of study"
        content={dateOfStudy}
      />
      <div style={{ alignSelf: 'end' }}>
        <button
          style={{ float: 'right' }}
          onClick={handleClick}
        >
          Edit
        </button>
      </div>
    </section>
  );
}

export default function EduExp() {
  const [eduExp, setEduExp] = useState(initEduExp);
  const [status, setStatus] = useState('editing');
  if (status == 'submitted') {
    return (
      <InfoSection
        {...eduExp}
        handleClick={() => {
          setStatus('editing');
        }}
      />
    );
  }
  return (
    <section className="content-wrapper section-wrapper">
      <label htmlFor="schoolName">
        <b>School Name</b>
        <input
          id="schoolName"
          type="text"
          autoComplete="on"
          placeholder="Enter school name"
          value={eduExp.schoolName}
          onChange={(e) => {
            setEduExp({ ...eduExp, schoolName: e.target.value });
          }}
        />
      </label>
      <label htmlFor="titleOfStudy">
        <b>Title of study</b>
        <input
          id="titleOfStudy"
          type="text"
          autoComplete="on"
          placeholder="Enter title of study"
          value={eduExp.titileOfStudy}
          onChange={(e) => {
            setEduExp({ ...eduExp, titileOfStudy: e.target.value });
          }}
        />
      </label>
      <label htmlFor="dateOfStudy">
        <b>Date of study</b>
        <input
          id="dateOfStudy"
          type="date"
          autoComplete="on"
          placeholder="Enter date of study"
          value={eduExp.dateOfStudy}
          onChange={(e) => {
            setEduExp({ ...eduExp, dateOfStudy: e.target.value });
          }}
        />
      </label>
      <div style={{ alignSelf: 'end' }}>
        <button
          style={{ float: 'right' }}
          onClick={() => {
            setStatus('submitted');
          }}
        >
          Submit
        </button>
      </div>
    </section>
  );
}
