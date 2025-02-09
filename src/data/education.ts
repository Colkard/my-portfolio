interface Education {
  title: string
  startDate: string
  endDate?: string
  school: string
  location: string
  description: string
  currentUni: boolean
}

const education: Education[] = [
  {
    title: 'Research and Development',
    startDate: '2017-01-01',
    endDate: '',
    school: 'Self-Learning',
    location: 'Remote',
    description:
      'Continuously researching and experimenting with new technologies, frameworks, and best practices to improve my development skills and stay up to date.',
    currentUni: true,
  },
  {
    title: 'Higher National Diploma in Multi-Platform Application Development',
    startDate: '2014-09-01',
    endDate: '2016-06-30',
    school: 'IES Calamot',
    location: 'Spain',
    description:
      'Learned to develop multi-platform applications, working with databases, object-oriented programming, and best development practices.',
    currentUni: false,
  },
]

export default education
