import { BackpackIcon, BookmarkIcon, GitHubLogoIcon, PersonIcon } from '@radix-ui/react-icons'
import React from 'react'

function Card() {
  return (
    <div className='flex w-[750px] h-[180px] bg-[#1e252f] rounded-md'>
        <div className='w-full h-full flex flex-row items-center p-5'>
            <img src="https://i.pravatar.cc/300?u=a042581f4e29026707d" className='rounded-md w-[110px] h-[120px]' />
            <div className='infos w-full text-white flex flex-col gap-1 p-3'>
                <div className='title w-full flex flex-row justify-between items-center'>
                    <h1 className='text-lg font-bold'>João Salvador</h1>
                    <p className='text-sm text-[#a0a0a0]'>Github link</p>
                </div>
                
                <p>Os cabeçalhos fornecem informações adicionais sobre a solicitação e a resposta de uma solicitação que usa cabeçalhos, consulte.</p>
                   
            </div>
        </div>
    </div>
  )
}

export default Card