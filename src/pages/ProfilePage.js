// ProfilePage.js

import React from 'react';
import './ProfilePage.css'; 

function ProfilePage() {
    const profile = {
        name: "M. Bintang Prayoga Utama",
        img: "https://media.licdn.com/dms/image/C4E03AQGKxtMuEQfoEg/profile-displayphoto-shrink_800_800/0/1652198807444?e=2147483647&v=beta&t=KR7d74N3EWFylV8vt13taf5cuSWEfXvBzLQgQ6iwYJQ",
        git: "mbprayoga",
        appDesc: "Introducing NASA Rover Photos, an app born from the passion and dedication of a developer on a personal quest for both mastery and exploration. Crafted as a personal project and the culmination of a challenging assignment, this app offers a firsthand look into the captivating images captured by NASA's pioneering rovers on Mars. Embark on this unique experience, not just as a user but as a companion on the developer's voyage through technology, space, and personal growth. NASA Rover Photos invites you to witness the app not only as a product but as a reflection of a developer's journey reaching for the stars."
    };
    return (
        <div>
            <div className="profileContainer">
                <img src={profile.img} alt={profile.name} className="profileImg" />
                <div className="profileDetails">
                    <p className="profileDetailName">{profile.name}</p>
                    <p className="profileDetailAcc">{profile.git}</p>
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
