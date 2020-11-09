/* eslint-disable import/prefer-default-export */
interface RoutesMap {
  home: {};
  pokedex: {};
  legendaries: {};
  documentation: {};
}

export const routesMap: RoutesMap = {
  home: {
    id: 1,
    path: '/',
    title: 'Home',
  },
  pokedex: {
    id: 2,
    path: '/pokedex',
    title: 'Pokédex',
  },
  legendaries: {
    id: 3,
    path: '/legendaries',
    title: 'Legendaries',
  },
  documentation: {
    id: 4,
    path: '/documentation',
    title: 'Documentation',
  },
}
