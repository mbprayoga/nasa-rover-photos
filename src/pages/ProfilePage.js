// ProfilePage.js

import React from 'react';
import './ProfilePage.css'; 

function ProfilePage() {
    const profile = {
        name: "M. Bintang Prayoga Utama",
        img: "https://media.licdn.com/dms/image/C4E03AQGKxtMuEQfoEg/profile-displayphoto-shrink_800_800/0/1652198807444?e=2147483647&v=beta&t=KR7d74N3EWFylV8vt13taf5cuSWEfXvBzLQgQ6iwYJQ",
        nim: "21120121130045",
        appDesc: "sumthin sumthin"
    };
    return (
        <div>
            <div className="profileContainer">
                <img src={profile.img} alt={profile.name} className="profileImg" />
                <div className="profileDetails">
                    <p className="profileDetail">Nama: {profile.name}</p>
                    <p className="profileDetail">NIM: {profile.nim}</p>
                </div>
            </div>
            <div className="appDescContainer">
                <h2 className="appDescTitle">About App</h2>
                <p className="profileDetail">{profile.appDesc}</p>
            </div>
        </div>
    );
}

export default ProfilePage;
