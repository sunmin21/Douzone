import React from "react";

const profileData = {
    yeonkyu:{
        name:'조연규',
        description: '화이팅!'
    },
    gildong:{
        name:'고길동',
        description: '힘내십쇼!'
    }
};

const Profile = ({match}) =>{
    const {username} = match.params;
    const profile = profileData[username];
    if(!profile){
        return <div>존재하지 않는 유저입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;