import Image from 'next/image'
import Info from './info/page'

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <Image src="/monstercatLogo.png" alt='logo' width={50} height={50}/>

      <Info/>
        </div>
      </div>
    </div>
  )
}
