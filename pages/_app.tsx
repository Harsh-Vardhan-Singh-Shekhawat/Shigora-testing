import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout className="max-w-7xl m-auto" >
    <ChakraProvider>
      <Component {...pageProps} />
     </ChakraProvider>
  </Layout>
  )
}
