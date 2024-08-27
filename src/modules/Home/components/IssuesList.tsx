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
    api.get("search/issues?q=bug").then((response) => {
      setIssues(response.data)
    })
  }, [])


  const date = dayjs(issue?.items[0].created_at)

  
  
  return (
    <div className='flex flex-wrap justify-center w-full h-screen gap-7 mt-14'>
      {issue?.items.map((item, index) => {
        return (
          <IssueCards title={item.title} body={item.body} date={date.fromNow()} key={index} />
        )
      })}

    </div>
  )
}

export default IssuesList