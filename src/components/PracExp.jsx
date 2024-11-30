import { useState } from 'react';
import { Info } from './Info';
import '../styles/input.css';

// company name, position title, main responsibilities
// of your jobs, date from and until

const initPracExp = {
  companyName: '',
  positionTitle: '',
  mainResponsibilities: '',
  fromDate: '',
  untilDate: '',
};

function InfoSection({
  companyName,
  positionTitle,
  mainResponsibilities,
  fromDate,
  untilDate,
  handleClick,
}) {
  return (
    <section className="content-wrapper section-wrapper">
      <Info
        title="Company name"
        content={companyName}
      />
      <Info
        title="Position title"
        content={positionTitle}
      />
      <div
        className="span-md-2"
        style={{ minHeight: '5em' }}
      >
        <Info
          title="Main resposibilities"
          content={mainResponsibilities}
        />
      </div>
      <Info
        title="From date"
        content={fromDate}
      />
      <Info
        title="Until date"
        content={untilDate}
      />
      <div
        className="span-md-2"
        style={{ alignSelf: 'end' }}
      >
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

export default function PracEdu() {
  const [generalInfo, setGeneralInfo] = useState(initPracExp);
  const [status, setStatus] = useState('editing');
  if (status == 'submitted') {
    return (
      <InfoSection
        {...generalInfo}
        handleClick={() => {
          setStatus('editing');
        }}
      />
    );
  }
  return (
    <section className="content-wrapper section-wrapper">
      <label htmlFor="companyName">
        <b>Company name</b>
        <input
          id="companyName"
          type="text"
          autoComplete="on"
          placeholder="Enter company name"
          value={generalInfo.companyName}
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, companyName: e.target.value });
          }}
        />
      </label>
      <label htmlFor="positionTitle">
        <b>Position title</b>
        <input
          id="positionTitle"
          type="text"
          autoComplete="on"
          placeholder="Enter email"
          value={generalInfo.positionTitle}
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, positionTitle: e.target.value });
          }}
        />
      </label>
      <label
        htmlFor="mainResponsibilities"
        className="span-md-2"
      >
        <b>Main responsibilities</b>
        <textarea
          id="mainResponsibilities"
          type="text"
          autoComplete="on"
          placeholder="Enter phone"
          value={generalInfo.mainResponsibilities}
          onChange={(e) => {
            setGeneralInfo({
              ...generalInfo,
              mainResponsibilities: e.target.value,
            });
          }}
        ></textarea>
      </label>
      <label htmlFor="fromDate">
        <b>From date</b>
        <input
          id="fromDate"
          type="date"
          autoComplete="on"
          placeholder="Enter start date"
          value={generalInfo.fromDate}
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, fromDate: e.target.value });
          }}
        />
      </label>
      <label htmlFor="untilDate">
        <b>Until date</b>
        <input
          id="untilDate"
          type="date"
          autoComplete="on"
          placeholder="Enter end date"
          value={generalInfo.untilDate}
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, untilDate: e.target.value });
          }}
        />
      </label>
      <div
        className="span-md-2"
        style={{ alignSelf: 'end' }}
      >
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
