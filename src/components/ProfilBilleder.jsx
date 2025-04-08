import React from 'react';
import style from './ProfilBilleder.module.css';
import CFO from '../assets/cfo.webp';
import CTO from '../assets/cto.webp';
import CEO from '../assets/ceo.webp';
import CSO from '../assets/cso.webp';

const images = [
    {
        src: CEO,
        title: 'Oscar',
        subtitle: 'CEO',
    },
    {
        src: CTO,
        title: 'Magnus',
        subtitle: 'CTO',
    },
    {
        src: CFO,
        title: 'Frederik',
        subtitle: 'CFO',
    },
    {
        src: CSO,
        title: 'Jonas',
        subtitle: 'CSO',
    },
];

export default function ProfilBilleder() {
    return (
        <div className={style.profileBillederContainer}>
            <h2 className={style.profileTitle}>Her er vi</h2>
            <div className={style.profileRow}>
                {images.map((img, index) => {
                    const email = `${img.title.toLowerCase()}@fjom.dk`;
                    return (
                        <div key={index} className={style.profileCard}>
                            <img src={img.src} alt={img.title} className={style.profileImage} />
                            <h5>{img.title}</h5>
                            <h6>{img.subtitle}</h6>
                            <h6>Email: {email}</h6>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
