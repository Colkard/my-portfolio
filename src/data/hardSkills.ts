interface HardSkill {
  name: string
  description: string
  icon: string
}

const hardSkills: HardSkill[] = [
  {
    name: 'VueJs',
    description:
      'Performant and versatile framework for building web user interfaces',
    icon: 'vuejs_icon',
  },
  {
    name: 'NodeJs',
    description: "I've been using NodeJs for backend development since 2018",
    icon: 'nodejs',
  },
  {
    name: 'Angular',
    description:
      "I've built scalable and dynamic web applications using Angular since 2017",
    icon: 'angular',
  },
  {
    name: 'React',
    description:
      'React has been one of my go-to libraries for building interactive UIs',
    icon: 'react',
  },
  {
    name: 'AstroJs',
    description: 'Static site generator for building modern websites',
    icon: 'Astro_light',
  },
  {
    name: 'MongoDB',
    description: 'My favorite database for modern apps',
    icon: 'mongodb',
  },
]

export default hardSkills
