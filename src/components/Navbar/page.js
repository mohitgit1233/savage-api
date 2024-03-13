import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left">
        <Image src="/assets/images/logo.png" 
         width={70}
         height={70}
         alt="Picture of the author"
         priority 
         className='imgg'/>
         <p>
           SAVAGE API
         </p>
         
      </div>

      <div className="right">
      <Link href='/'><ul className="li">Home</ul></Link>
        <Link href='/'><ul className="li">About</ul></Link>
         <Link href='/'><ul className="li">Documentation</ul></Link>
        
       
      </div>
    </div>
  )
}

export default Navbar