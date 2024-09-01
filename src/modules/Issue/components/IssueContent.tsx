import { Inter } from 'next/font/google'
import React from 'react'
import ReactMarkdown from 'react-markdown'

type IssueProps = {
  content?: string
  setContent?: React.Dispatch<React.SetStateAction<string>>
}

const inter = Inter({ subsets: ["latin"] });

function IssueContent({ content, setContent }: IssueProps) {
  return (
    <div className='flex justify-center w-full h-full'>
      <div className='w-[750px] h-[600px] bg-[#1e252f] rounded-md'>
        <ReactMarkdown className={`${inter.className} flex flex-col gap-2 p-6 w-full h-full text-white react-markdown`}>{content}</ReactMarkdown>
      </div>  
    </div>
  )
}

export default IssueContent
