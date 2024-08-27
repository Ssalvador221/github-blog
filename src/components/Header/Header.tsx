"use client"
import React, { useEffect, useState } from 'react'
import Card from '../Card/CardProfile'
import { api } from '@/lib/axios/api'
import { GithubUser } from '@/types/types'

function Header() {
  const [user, setUser] = useState<GithubUser>()

  useEffect(() =>  {
    const fetchData = async () => {
    try {
      const response = await api.get("users/ssalvador221")
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
  }, [])


  return (
    <div className='w-full flex justify-center bg-[#161b22]'>
        <div className='mt-28' key={user?.id}>
            <Card bio={user?.bio} name={user?.name} githubUrl={user?.html_url} avatar_url={user?.avatar_url} tags={[{ username: user?.login, followers: user?.followers, company: user?.company }]} />
        </div>
    </div>
  )
}

export default Header