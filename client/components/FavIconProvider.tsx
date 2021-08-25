// Import Modules
import Head from 'next/head'
import { useColorMode } from '@chakra-ui/react'

const FavIconProvider = ({ children }) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Head>
        <link rel="icon" href={colorMode === 'dark' ? '/favicon.ico' : '/favicon-lightmode.ico'} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  )
}

export default FavIconProvider
