// Import Modules
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'

// Import Config
import theme from 'config/ThemeConfig'

// Import Styles
import 'styles/Global.css'

const KLSite = ({ Component, pageProps }: AppProps) => {
  const { colorMode } = useColorMode()
  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <link rel="icon" href={`/images/logo_${colorMode}.png`} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  )
}
export default KLSite
