"use client"
import IssueCards from './Issue-Cards'

function IssuesList() {
  return (
    <div className='flex justify-center w-full h-screen gap-7 mt-14'>
      <IssueCards title='Testando titulo' content='Testando conteudo' date='10/10/2022' />
    </div>
  )
}

export default IssuesList