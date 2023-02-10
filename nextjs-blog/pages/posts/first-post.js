import Image from 'next/image'
import Link from 'next/link'

export default function FirstPost () {
  return (
    <div>
      <h1>First Post 😅</h1>
      <Image
        src='/images/profile.jpg' // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt='Your Name'
      />
      <h2>
        <Link href='/'> Back to home page 😸 </Link>
      </h2>
    </div>
  )
}
