"use client"
import { Issue } from '@/types/types'
import { useEffect, useState } from 'react'
import IssueCards from './Issue-Cards'
import { api } from '@/lib/axios/api'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')
function IssuesList() {
  const [issue, setIssues] = useState<Issue>()

  useEffect(() =>  {
    api.get("/repos/Ssalvador221/github-blog/issues/1").then((response) => {
      setIssues(response.data)
    })
  }, [])


  const date = dayjs(issue?.created_at)

  
  
  return (
    <div className='flex justify-center w-full h-screen gap-7 mt-14'>

      <IssueCards title={issue?.title} body={issue?.body} date={date.fromNow()} />
      
    </div>
  )
}

export default IssuesList