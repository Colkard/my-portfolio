interface Language {
  name: string
  level: string
  description: string
  show: boolean
}

const languages: Language[] = [
  {
    name: 'Spanish',
    level: 'Native',
    description: 'I speak fluently and write fluently',
    show: true,
  },
  {
    name: 'Catalan',
    level: 'Advanced',
    description: 'I speak fluently and write fluently',
    show: true,
  },
  {
    name: 'Inglés',
    level: 'Advanced',
    description: 'I speak fluently and write fluently',
    show: true,
  },
]

export default languages
