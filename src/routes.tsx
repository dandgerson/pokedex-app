import React from 'react'

import Home from 'pages/Home'
import Pokedex from 'pages/Pokedex'
import Legendaries from 'pages/Legendaries'
import Documentation from 'pages/Documentation'
import Page404 from 'pages/Page404'
import Pokemon from 'pages/Pokemon'

export enum PathEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

const routes: Array<{
  id: string
  path: string
  title: string
  isNavItem: boolean
  withParams?: boolean
  render: () => React.ReactNode
}> = [
  {
    id: '1',
    path: PathEnum.HOME,
    title: 'Home',
    isNavItem: true,
    render: () => <Home />,
  },
  {
    id: '2',
    path: PathEnum.POKEDEX,
    title: 'Pokédex',
    isNavItem: true,
    render: () => <Pokedex />,
  },
  {
    id: '3',
    path: PathEnum.LEGENDARIES,
    title: 'Legendaries',
    isNavItem: true,
    render: () => <Legendaries />,
  },
  {
    id: '4',
    path: PathEnum.DOCUMENTATION,
    title: 'Documentation',
    isNavItem: true,
    render: () => <Documentation />,
  },
  {
    id: '6',
    path: PathEnum.POKEMON,
    title: 'Pokemon',
    isNavItem: false,
    withParams: true,
    render: () => <Pokemon />,
  },
  {
    id: '5',
    path: '*',
    title: 'Page404',
    isNavItem: true,
    render: () => <Page404 />,
  },
]

export default routes
