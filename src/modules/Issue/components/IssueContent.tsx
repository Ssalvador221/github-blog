import React from 'react'
import ReactMarkdown from 'react-markdown'

type IssueProps = {
  content?: string
  setContent?: React.Dispatch<React.SetStateAction<string>>
}
function IssueContent({ content, setContent }: IssueProps) {
  return (
    <div className='flex justify-center w-full h-full '>
      <div className='w-[750px] h-[600px] bg-[#1e252f] rounded-md'>
        <ReactMarkdown className='w-full h-full p-5 text-white'>{content}</ReactMarkdown>
      </div>  
    </div>
  )
}

export default IssueContent
