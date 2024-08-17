import { BackpackIcon, BookmarkIcon, GitHubLogoIcon, PersonIcon } from '@radix-ui/react-icons'
import React from 'react'

function Card() {

  const links = [
    {
        userInfo: {
            username: 'joao_rizzo',
            company: "Amazon",
            followers: 100
        }
    }
  ]


  return (
    <div className='flex w-[750px] h-[180px] bg-[#324a87] rounded-md'>
        <div className='w-full h-full flex flex-row items-center p-5'>
            <img src="https://i.pravatar.cc/300?u=a042581f4e29026707d" className='rounded-md w-[110px] h-[120px]' />
            <div className='infos w-full text-white flex flex-col gap-1 p-3'>
                <div className='title w-full flex flex-row justify-between items-center'>
                    <h1 className='text-lg font-bold'>João Salvador</h1>
                    <p className='text-sm text-[#a0a0a0]'>Github link</p>
                </div>
                
                <p>Os cabeçalhos fornecem informações adicionais sobre a solicitação e a resposta de uma solicitação que usa cabeçalhos, consulte.</p>
                <div className='footer w-full flex flex-row items-center pt-4'>
                    {links.map((link) => (
                        <>
                            <GitHubLogoIcon />
                            <p className='px-2 pr-6'>{link.userInfo.username}</p>
                            <BackpackIcon  />
                            <p className='px-2 pr-5'>{link.userInfo.company}</p>
                            <PersonIcon />
                            <p className='pl-1'>{link.userInfo.followers}</p>
                        </>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card