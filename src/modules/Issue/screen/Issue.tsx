"use client"
import React, { useEffect, useState } from 'react'
import CardHeader from '../components/Card-Header'
import { IIssue } from '@/types/types'
import { api } from '@/lib/axios/api'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'
import IssueContent from '../components/IssueContent'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')
function Issue({ params }: { params: { issueNumber: string } }) {
  const [issue, setIssue] = useState<IIssue>() 
  const [content, setContent] = useState("")

  useEffect(() =>  {
    api.get(`/repos/Ssalvador221/github-blog/issues/${params.issueNumber}`).then((response) => {
      setIssue(response.data)
      setContent(response.data.body)
    })
  }, [params.issueNumber])  

  const date = dayjs(issue?.created_at)
  
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center gap-5'>
      <CardHeader title={issue?.title} tags={[{ username: issue?.user.login, created_at: date.fromNow(), comments: issue?.comments }]} />
      <IssueContent content={content} setContent={setContent}/>
    </div>
  )
}

export default Issue