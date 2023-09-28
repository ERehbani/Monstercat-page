import Image from 'next/image'
import React from 'react'
import './globals.css'

function Info() {
  return (
    <div>
        <div className='flex border border-red-600 w-[69%] mx-auto'>
            <Image src="/grantBackground.webp" alt='grant' width={560} height={560} className="object-cover bg-center bg-cover aspect-square"/>
        <div className='ml-10 my-auto'>
            <div className=''>
                <h2 className='artist-title text-5xl'>GRANT</h2>
            </div>
            <div className='bg-black flex'>
                icons
                <Image src="/spotify.svg" alt='spotify' width={20} height={0}/>
                <Image src="/facebook.svg" alt='facebook' width={20} height={0}/>
                <Image src="/instagram.svg" alt='instagram' width={20} height={0}/>
                <Image src="/soundcloud.svg" alt='soundcloud' width={20} height={0}/>
                <Image src="/twitter.svg" alt='twitter' width={20} height={0}/>
                <Image src="/youtube.svg" alt='youtube' width={20} height={0}/>
            </div>
            <div className='h-[196px] overflow-x-scroll w-[490px]'>
                
<p>The evolution of Grant has stemmed from a shift in artistic and personal characteristics. It’s a coming of age story that’s told through music, art and an approachable personality. Being able to identify as yourself and not hide behind the facade that a brand can sometimes hold, allows Grant to truly embrace himself as inspiration. Now Grant stands at the precipice of another level of expression. This is music tied to a life lived with introspection and compassion. For those looking to find inspiration, these songs are for you. A community awaits where individuals share different interpretations, a myriad of emotions, and inner discovery. The common thread is music from an artist who knows what it’s like to be on the outside looking in. But as Grant so successfully proves, it’s the right place to be.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Info