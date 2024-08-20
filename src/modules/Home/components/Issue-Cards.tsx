"use client"

type IssueCardProps = {
  title: string;
  content: string;
  date: string;
}

function IssueCards({ title, content, date }: IssueCardProps) {
  return (
    <div className='w-[420px] h-[250px] rounded-md bg-[#122946]'>
      <div className="title w-full h-[70px] flex flex-row items-center px-4 pt-4 text-white ">
          <h1 className="font-bold text-[17px] w-[250px] text-start">{title}{/* TODO: ADD Title PROPS */}</h1>
          <p className="text-[12px] text-end w-32 text-[#a0a0a0]">{date}{/* TODO: ADD DATA PROPS */}</p>
      </div>
      <div className="content">
        {/* TODO: ADD CONTENT PROPS */}
        <p className="text-[14px] p-4 text-[#a0a0a0]">{content}</p>
      </div>
    </div>
  )
}

export default IssueCards