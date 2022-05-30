
import React, {FC} from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
    children: JSX.Element
}

export const MainLayout: FC<Props> = ({children} : Props) => {
  return (
    <>
    <Header></Header>
    {children}
    <Footer></Footer>
    </>
  )
}
