import React from 'react'

import Home from 'pages/Home'
import Pokedex from 'pages/Pokedex'
import Legendaries from 'pages/Legendaries'
import Documentation from 'pages/Documentation'
import Page404 from 'pages/Page404'

export enum PathEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

const routes: Array<{
  id: string
  path: string
  title: string
  render: () => React.ReactNode
}> = [
  {
    id: '1',
    path: PathEnum.HOME,
    title: 'Home',
    render: () => <Home />,
  },
  {
    id: '2',
    path: PathEnum.POKEDEX,
    title: 'Pokédex',
    render: () => <Pokedex />,
  },
  {
    id: '3',
    path: PathEnum.LEGENDARIES,
    title: 'Legendaries',
    render: () => <Legendaries />,
  },
  {
    id: '4',
    path: PathEnum.DOCUMENTATION,
    title: 'Documentation',
    render: () => <Documentation />,
  },
  {
    id: '5',
    path: '*',
    title: 'Page404',
    render: () => <Page404 />,
  },
]

export default routes
