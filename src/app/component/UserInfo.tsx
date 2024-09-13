'use client';
// Make sure this is added at the top to ensure client-side rendering
/* eslint-disable @typescript-eslint/no-explicit-any */
import WebApp from '@twa-dev/sdk'
import React, { useEffect, useState } from 'react'
const UserInfo = () => {
    const [userInfo, setUserInfo] = useState<typeof WebApp.initDataUnsafe.user>()
    useEffect(() => {
        if (typeof window !== 'undefined' && WebApp) {
            // Safely access WebApp API after ensuring window is defined
            console.log(WebApp.version);  // Logs the version of the SDK
            // Set user info from initDataUnsafe
            setUserInfo(WebApp.initDataUnsafe?.user);
        }
    }, []);
    if (!userInfo) {
        return <div >Fetching ...</div>
    }
    return (
        <div className='text-center'>
            <p>User telegram information</p>
            <ul>
                <li>{userInfo?.first_name}</li>
                <li>{userInfo?.last_name}</li>
                <li>{userInfo?.username}</li>

            </ul>
        </div>
    )
}

export default UserInfo
