import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

export default function FirstPost () {
  return (
    <>
      <Head>
        <title>First Post </title>
        
      </Head>
      <Script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN'
          strategy='lazyOnload'
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
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
    </>
  )
}
