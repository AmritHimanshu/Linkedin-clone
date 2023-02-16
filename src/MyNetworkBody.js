import React from 'react'
import { db } from './firebase'
import { useCollection } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import MyNetworkBodyOption from './MyNetworkBodyOption'
import './MyNetworkBody.css'

function MyNetworkBody() {

    const user = useSelector(selectUser);

    const [users, loading] = useCollection(
        db.collection('users')
    );

    return (
        <div className='myNetworkBodyStart'>
            <div className="myNetworkBodyInvitation">
                <p className='myNetworkBodyInvitation__pending'>No pending invitations</p>
                <p className="myNetworkBodyInvitation__manage">Manage</p>
            </div>
            < div className='myNetworkBody' >

                <div className="myNetworkBody__header">
                    <p className='people'>People you may know</p>
                    <p className='seeAll'>See all</p>
                </div>

                {users?.docs.map(doc => {
                    const { email, displayName, photoURL } = doc.data();
                    if (user.email != email)
                        return (
                            <MyNetworkBodyOption key={doc.id} id={doc.id} email={email} name={displayName} description="New to Linkedin and also this is for the test" college="Developed by HKA" />
                        )
                })}

            </div>
        </div>
    )
}

export default MyNetworkBody