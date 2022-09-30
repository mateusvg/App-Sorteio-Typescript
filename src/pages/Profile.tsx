import React from 'react';
import Paper from '../componets/Paper'

export interface IProfilePageProps { }
const ProfilePage: React.FunctionComponent<IProfilePageProps> = (props) => {
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center' ,padding:'20px'}}>
            <Paper/>

        </div>
    )
}
export default ProfilePage;
