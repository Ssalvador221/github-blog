"use client"
import IssueCards from './Issue-Cards'

function IssuesList() {
  return (
    <div className='flex justify-center w-full h-screen gap-7 mt-14'>
      <IssueCards />
      <IssueCards />
    </div>
  )
}

export default IssuesList