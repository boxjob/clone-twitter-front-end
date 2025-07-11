import Image from "next/image"
import Link from "next/link"

export const Logo = ({ size }:{ size: number }) => {
  return (
    <Link href='/'>
        <Image src={'/logo.png'} alt="Z" width={size} height={size} quality={100} />
    </Link>    
  )
}
