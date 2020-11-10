import React from 'react'

import Home from 'pages/Home'
import Pokedex from 'pages/Pokedex'
import Legendaries from 'pages/Legendaries'
import Documentation from 'pages/Documentation'
import Page404 from 'pages/Page404'

const routes: Array<{
  id: string
  path: string
  title: string
  render: () => React.ReactNode
}> = [
  {
    id: '1',
    path: '/',
    title: 'Home',
    render: () => <Home />,
  },
  {
    id: '2',
    path: '/pokedex',
    title: 'Pokédex',
    render: () => <Pokedex />,
  },
  {
    id: '3',
    path: '/legendaries',
    title: 'Legendaries',
    render: () => <Legendaries />,
  },
  {
    id: '4',
    path: '/documentation',
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
