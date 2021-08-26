// Import Modules
import { FC } from 'react'
import Head from 'next/head'
import { useColorMode } from '@chakra-ui/react'

const FavIconProvider: FC = ({ children }) => {
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
