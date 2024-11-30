import { useState } from 'react';
import { Info } from './Info';
import '../styles/input.css';

const initGeneralInfo = {
  name: '',
  email: '',
  phone: '',
};

function InfoSection({ name, email, phone, handleClick }) {
  return (
    <section className="content-wrapper section-wrapper">
      <Info
        title="Your name"
        content={name}
      />
      <Info
        title="Your email"
        content={email}
      />
      <Info
        title="Your phone"
        content={phone}
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

export default function GernaralInfo() {
  const [generalInfo, setGeneralInfo] = useState(initGeneralInfo);
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
      <label htmlFor="name">
        <b>Your name</b>
        <input
          id="name"
          type="text"
          autoComplete="on"
          placeholder="Enter name"
          value={generalInfo.name}
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, name: e.target.value });
          }}
        />
      </label>
      <label htmlFor="email">
        <b>Your email</b>
        <input
          id="email"
          type="email"
          autoComplete="on"
          placeholder="Enter email"
          value={generalInfo.email}
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, email: e.target.value });
          }}
        />
      </label>
      <label htmlFor="phone">
        <b>Your phone</b>
        <input
          id="phone"
          type="text"
          autoComplete="on"
          placeholder="Enter phone"
          value={generalInfo.phone}
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, phone: e.target.value });
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
