import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { RouteItem, routes } from '../../../routing/routes'

const SideBar = (): JSX.Element => {
  const history = useHistory()

  const allItems = routes.map((routeData: RouteItem) => {
    const { menu, path } = routeData

    if (!menu) {
      return null
    }

    return (
      <Item
        key={path}
        selected={location.pathname.includes(path)}
        onClick={() => history.push(path)}
      >
        {menu.icon && <menu.icon />}
        <Name>{menu.title}</Name>
      </Item>
    )
  })

  return (
    <>
      <Container>
        <Title onClick={() => history.push('/')}>REACT APP</Title>
        <ItemList>{allItems}</ItemList>
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: teal;
`

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: white;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 32px;
  cursor: pointer;
`

const ItemList = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  color: 'white';
`

interface ItemProps {
  selected?: boolean
}

const Item = styled.div<ItemProps>`
  max-height: 60px;
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: ${(props) => (props.selected ? 'orange' : 'trasparent')};
  font-weight: 400;

  &:hover {
    background: orange;
    cursor: pointer;
  }
`

const Name = styled.span`
  font-size: 18px;
  line-height: 21px;
  margin-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default SideBar
