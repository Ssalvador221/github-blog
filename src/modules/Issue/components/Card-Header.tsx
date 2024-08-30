"use client"
import { ArrowLeftIcon, CalendarIcon, ExternalLinkIcon, GitHubLogoIcon, QuestionMarkIcon } from '@radix-ui/react-icons'
import { FaComment } from "react-icons/fa";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

type CardProps = {
  title?: string
  githubUrl?: string
  tags?: [{
    username?: string
    created_at?: string
    comments?: number
  }]
}
function CardHeader({ title, githubUrl, tags }: CardProps) {
  const router = useRouter()
  
  return (
    <div className='flex w-[750px] h-[120px] bg-[#1e252f] rounded-md mt-7'>
        <div className='w-full h-full flex flex-row items-center p-5'>
            <div className='infos w-full text-white flex flex-col gap-1 p-3'>
                <div className='header w-full flex flex-row justify-between items-center'>
                    <p onClick={() => router.back()} className='text-[12px] w-32 flex items-center gap-2 text-[#1e57c0] cursor-pointer'><ArrowLeftIcon /> Voltar</p>
                    <Link href={`${githubUrl}`} className='flex flex-row items-center gap-1 text-sm text-[#1e57c0] font-bold'>Github <ExternalLinkIcon /></Link>
                </div>
                <p className='text-[20px]'>{title}</p>  
                <div className='tags flex flex-row gap-2'>
                    {tags?.map((tag, index) => {
                        return (
                            <div key={index} className='tag flex flex-row items-center gap-1 pt-2 text-[12px] text-[#a0a0a0]'>
                                <GitHubLogoIcon />
                                <p className='pr-3'>{tag.username}</p>
                                <CalendarIcon />
                                <p className='pr-3'>{tag.created_at || 'N/A'}</p>
                                <FaComment />
                                <p>{tag.comments} comentários</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardHeader