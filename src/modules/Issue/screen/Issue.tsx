"use client"
import React, { useEffect, useState } from 'react'
import CardHeader from '../components/Card-Header'
import { IIssue } from '@/types/types'
import { api } from '@/lib/axios/api'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')
function Issue({ params }: { params: { issueNumber: string } }) {
  const [issue, setIssue] = useState<IIssue>() 

  useEffect(() =>  {
    api.get(`/repos/Ssalvador221/github-blog/issues/${params.issueNumber}`).then((response) => {
      setIssue(response.data)
    })
  }, [params.issueNumber])  

  const date = dayjs(issue?.created_at)
  
  return (
    <div className='flex w-full h-screen justify-center'>
      <CardHeader title={issue?.title} tags={[{ username: issue?.user.login, created_at: date.fromNow(), comments: issue?.comments }]} />

      <div className='issue content'>  

      </div>
    </div>
  )
}

export default Issue