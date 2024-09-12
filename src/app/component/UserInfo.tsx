
'use client'
import React, { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'
const UserInfo = () => {
    const [userInfo, setUserInfo] = useState<typeof WebApp.initDataUnsafe.user>()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        console.log(WebApp.initDataUnsafe.user)
        setUserInfo(userInfo)
        setLoading(false)
    }, [])
    if (!userInfo) {
        return <div >Fetching ...</div>
    }
    return (
        <div className='text-center'>
            <p>User telegram information</p>
            <ul>
                <li>{userInfo?.first_name}</li>
            </ul>
        </div>
    )
}

export default UserInfo
