"use client"

import Link from "next/link";

type IssueCardProps = {
  issueNumber: number;
  title?: string;
  body: string;
  date?: string;
}

function IssueCards({ issueNumber, title, body, date }: IssueCardProps) {
  return (
    <div className='w-[420px] h-[215px] rounded-md bg-[#122946]'>
      <div className="title w-full h-[70px] flex flex-row items-center px-4 pt-4 text-white ">
          <h1 className="font-bold text-[17px] w-[250px] text-start">{title}</h1>
          <p className="text-[12px] text-end w-32 text-[#a0a0a0]">{date}</p>
      </div>
      <div className="content">
        <p className="text-[14px] p-4 text-[#a0a0a0] text-clip">
          {body?.length > 100 ? `${body?.substring(0, 200)}...` : body}
        </p>
      </div>
      <div className="footer w-full ml-4 text-[#dddbdb] text-[12px]"> 
         <Link href={`/issue/${issueNumber}`}>Ver mais</Link>
      </div>
    </div>
  )
}

export default IssueCards