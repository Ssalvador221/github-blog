import Issue from '@/modules/Issue/screen/Issue'
import React from 'react'


function Page({ params }: { params: { issueNumber: string } }) {
  return (
    <Issue params={params} />
  )
}

export default Page