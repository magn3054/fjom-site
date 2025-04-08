import React from 'react';

export default function TeamSection () {
  const teamMembers = [
    {
      title: 'CEO',
      name: 'Oscar',
      email: 'oscar@fjom.dk',
      image: '/assets/cfo.webp'
    },
    {
      title: 'CTO',
      name: 'Magnus',
      email: 'magnus@fjom.dk',
      image: '/assets/cfo.webp'
    },
    {
      title: 'CFO',
      name: 'Frederik',
      email: 'frederik@fjom.dk',
      image: '/assets/cfo.webp'
    },
    {
      title: 'CSO',
      name: 'Jonas',
      email: 'jonas@fjom.dk',
      image: '/assets/cfo.webp'
    }
  ];

  return (
    <div className="team-section">
      <h1 className="team-heading">Her er vi</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-member-image">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.title}`} 
                  className="member-img"
                />
              ) : (
                <div className="image-placeholder">
                  <div className="avatar-head"></div>
                  <div className="avatar-body"></div>
                </div>
              )}
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
  )
}