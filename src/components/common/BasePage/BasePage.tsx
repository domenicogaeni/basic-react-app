import React from 'react'
import styled from 'styled-components'

import { SideBar } from '../SideBar'

type BasePageProps = {
  header?: React.ReactNode
  children?: React.ReactNode
  pageKey?: string | null
}

const BasePage = ({ children, pageKey }: BasePageProps): JSX.Element => {
  return (
    <>
      <SideBar />
      <ContentBox>
        {pageKey && <PageTitle>{pageKey}</PageTitle>}
        {children}
      </ContentBox>
    </>
  )
}

const ContentBox = styled.div`
  padding-right: 15px;
  padding-left: 215px;
  padding-top: 15px;
`

const PageTitle = styled.h3`
  padding-left: 48px;
  padding-top: 32px;
`

export default BasePage
