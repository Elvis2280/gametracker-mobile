export const storageKeys = {
  token: 'token',
  user: 'user'
}

export const gameDataMock = {
  title: 'The Legend of Zelda: Breath of the Wild',
  description:
    'Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across fields, through forests and to mountain peaks as you discover what has become of the ruined kingdom of Hyrule in this stunning open-air adventure.',
  price: 59.99,
  releaseDate: '2017-03-03T00:00:00.000Z',
  publisher: 'Nintendo',
  developer: 'Nintendo',
  rating: 'E',
  cover:
    'https://www.nintendo.com/content/dam/noa/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/the-legend-of-zelda-breath-of-the-wild-switch-hero.jpg'
}

export const platoformsIcons = {
  xbox: 'xbox',
  playstation: 'playstation',
  steamdeck: 'steam'
}

export const platoformsOptions = [
  {
    label: 'Xbox',
    value: 'xbox'
  },
  {
    label: 'PlayStation',
    value: 'playstation'
  },
  {
    label: 'Steam Deck',
    value: 'steamdeck'
  }
]

export const iconByPlatform = new Map()
iconByPlatform.set('xbox', 'xbox')
iconByPlatform.set('playstation', 'playstation')
iconByPlatform.set('steamdeck', 'steam')

export const gameCategories = [
  {
    label: 'Action',
    value: 'action'
  },
  {
    label: 'Adventure',
    value: 'adventure'
  },
  {
    label: 'RPG',
    value: 'rpg'
  },
  {
    label: 'Simulation',
    value: 'simulation'
  },
  {
    label: 'Strategy',
    value: 'strategy'
  },
  {
    label: 'Sports',
    value: 'sports'
  },
  {
    label: 'Puzzle',
    value: 'puzzle'
  }
]

export const gameStatus = {
  notStarted: 'notstarted',
  inProgress: 'inprogress',
  completed: 'completed'
}

export const gameStatusColors = new Map()
gameStatusColors.set(gameStatus.notStarted, 'gray')
gameStatusColors.set(gameStatus.inProgress, 'yellow')
gameStatusColors.set(gameStatus.completed, 'green')

export const gameStatusNames = new Map()
gameStatusNames.set(gameStatus.notStarted, 'Not started')
gameStatusNames.set(gameStatus.inProgress, 'In progress')
gameStatusNames.set(gameStatus.completed, 'Completed')
