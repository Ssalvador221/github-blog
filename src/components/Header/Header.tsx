"use client"
import React, { useEffect, useState } from 'react'
import Card from '../Card/CardProfile'
import { usersApi } from '@/lib/axios/api'
import { GithubUser } from '@/types/types'

function Header() {
  const [user, setUser] = useState<GithubUser>()

  useEffect(() =>  {
    const fetchData = async () => {
    try {
      const response = await usersApi.get("ssalvador221")
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
  }, [])


  return (
    <div className='w-full flex justify-center bg-[#0d1d32]'>
        <div className='mt-44' key={user?.id}>
            <Card bio={user?.bio} name={user?.name} githubUrl={user?.html_url} avatar_url={user?.avatar_url} tags={[{ username: user?.login, followers: user?.followers, company: user?.company }]} />
        </div>
    </div>
  )
}

export default Header