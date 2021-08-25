// Import Modules
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'

// Import Config
import theme from 'config/ThemeConfig'

// Import Styles
import 'styles/Global.css'

// Import Components
import FavIconProvider from 'components/FavIconProvider'

const KLSite = ({ Component, pageProps }: AppProps) => (
  <AnimatePresence exitBeforeEnter>
    <ChakraProvider theme={theme}>
      <FavIconProvider>
        <Component {...pageProps} />
      </FavIconProvider>
    </ChakraProvider>
  </AnimatePresence>
)
export default KLSite
