import React from 'react';
import './ProfilePage.css'; 

function ProfilePage() {
    const profile = {
        name: "M. Bintang Prayoga Utama",
        img: "https://media.licdn.com/dms/image/C4E03AQGKxtMuEQfoEg/profile-displayphoto-shrink_800_800/0/1652198807444?e=2147483647&v=beta&t=KR7d74N3EWFylV8vt13taf5cuSWEfXvBzLQgQ6iwYJQ",
        nim: "21120121130045",
        desc: "sumthin sumthin"
    };
    return (
        <div className="container">
            <img src={profile.img} alt={profile.name} className="detail-img" />
            <p className="detail-detail">Nama: {profile.name}</p>
            <p className="detail-detail">NIM: {profile.nim}</p>
            <p className="detail-detail">Description: {profile.desc}</p>
        </div>
    );
}

export default ProfilePage;
