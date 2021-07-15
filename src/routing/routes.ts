import { Example } from '../pages/Example'
import { Home } from '../pages/Home'

export type RouteItem = {
  path: string
  component: React.ComponentType
  menu?: MenuType
}

export type MenuType = {
  title: string
  icon?: React.ComponentType
}

export const routes: RouteItem[] = [
  {
    path: '/home',
    component: Home,
    menu: {
      title: 'Home',
    },
  },
  {
    path: '/example',
    component: Example,
    menu: {
      title: 'Example',
    },
  },
]
