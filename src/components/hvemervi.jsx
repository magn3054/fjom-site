// TeamSection.jsx
import React from 'react';
import './hvemervi.module.css';

const TeamSection = () => {
  const teamMembers = [
    {
      title: 'CEO',
      name: 'Oscar',
      email: 'oscar@fjom.dk'
    },
    {
      title: 'CTO',
      name: 'Magnus',
      email: 'magnus@fjom.dk'
    },
    {
      title: 'CFO',
      name: 'Frederik',
      email: 'frederik@fjom.dk'
    },
    {
      title: 'CSO',
      name: 'Jonas',
      email: 'jonas@fjom.dk'
    }
  ];

  return (
    <div className="team-section">
      <h1 className="team-heading">Her er vi</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="avatar-placeholder">
              <div className="avatar-head"></div>
              <div className="avatar-body"></div>
            </div>
            <div className="team-info">
              <h2 className="team-title">{member.title}</h2>
              <p className="team-name">{member.name}</p>
              <p className="team-email">Email: {member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;