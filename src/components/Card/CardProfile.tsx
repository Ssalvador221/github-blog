import { BackpackIcon, ExternalLinkIcon, GitHubLogoIcon, PersonIcon } from '@radix-ui/react-icons'
import React from 'react'

type CardProps = {
  name?: string
  githubUrl?: string
  avatar_url?: string
  bio?: string
  tags?: [{
    username?: string
    followers?: number
    company?: string
  }]
}
function Card({ name, githubUrl, tags, bio, avatar_url }: CardProps) {
  
  return (
    <div className='flex w-[750px] h-[180px] bg-[#1e252f] rounded-md'>
        <div className='w-full h-full flex flex-row items-center p-5'>
            <img src={avatar_url} className='rounded-md w-[110px] h-[120px]' />
            <div className='infos w-full text-white flex flex-col gap-1 p-3'>
                <div className='title w-full flex flex-row justify-between items-center'>
                    <h1 className='text-lg font-bold'>{name}</h1>
                    <a href={githubUrl} className='flex flex-row items-center gap-1 text-sm text-[#1e57c0] font-bold'>Github <ExternalLinkIcon /></a>
                </div>
                <p>{bio}</p>  
                <div className='tags flex flex-row gap-2'>
                    {tags?.map((tag, index) => {
                        return (
                            <div key={index} className='tag flex flex-row items-center gap-1 pt-2 text-[12px] text-[#a0a0a0]'>
                                <GitHubLogoIcon />
                                <p className='pr-3'>{tag.username}</p>
                                <BackpackIcon />
                                <p className='pr-3'>{tag.company || 'N/A'}</p>
                                <PersonIcon />
                                <p>{tag.followers} seguidores</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card