'use client'

import AuthContext from "@/stores/authContext";
import { useContext, useEffect, useState } from "react";

const Page = () => {
  const { user, authReady, login } = useContext(AuthContext)
  const [error, setError] = useState(null)
  const [isUser, setIsUser] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (authReady) {
      fetch('/.netlify/functions/secureDatabaseData', user && {
        headers: {
          Authorization:  'Bearer ' + user.token.access_token
        }
      })
      .then(res => {
        if (!res.ok) {
          login()
          throw Error('You must be logged in to view this content')
        }
        return res.json()
      })
      .then(data => {
        setError(null)
        setData(data)
      })
      .catch(err => {
        setError(err.message)
        setData(null)
      })
    }

  },[user, authReady])

  
  return ( 
    <>
      {!authReady && <div>Loading...</div>}
      {error && (
        <>
          <p className="text-center p-4">{ error }</p>
          <h1 className="text-8xl text-center p-4">🔒</h1>
        </>
      )}
      {data && data?.map(profile => (
        <div key={profile.id} className="block max-w-sm m-2 p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h2 className="mb-2 text-xl font-bold tracking-tight">{profile.name}</h2>
          <h2 className="mb-2 text-xl font-bold tracking-tight">{profile.age}</h2>
        </div>
      ))}
    </>
  );
}

export default Page;