export const SITE = {
  website: 'https://simple-portfolio.vicbox.dev', // replace this with your deployed domain
  title: 'Simple Portfolio',
  description: 'A simple but beautiful portfolio created with Astro',
  tags: ['portfolio', 'Resume cv', 'Astro'],
  ogImage: '/og-image.webp',
  logo: 'logo',
  logoText: 'Portfolio',
  lang: 'en',
  favicon: '/favicon.png',
  repository: 'https://github.com/vito8916/simple-portfolio.git',
  author: 'Victor Alvarado',
  profile: 'https://victoralvarado.dev/',
}

export const ME = {
  name: 'Alberto',
  profession: 'Software Engineer | Full Stack Developer',
  profileImage: 'yo.jpg',
  profileFacts: [
    {
      value: 8,
      description: 'Years of Experience',
    },
    {
      value: 10,
      description: 'Client Projects',
    },
    {
      value: 3,
      description: 'Personal Projects',
    },
  ],
  contactInfo: {
    email: 'colkard96@gmail.com',
    linkedin:
      'https://www.linkedin.com/in/alberto-l%C3%B3pez-p%C3%A9rez-b5727bb2/',
    resumeDoc: 'resume.pdf',
  },
  aboutMe: `I am a software engineer with a passion for automation. 
  I have developed several personal projects in this field. 
  I have created two bots, one for social media automation using Python and another for cryptocurrency trading. 
  Additionally, I developed a web application for my building's community, 
  allowing residents to remotely lock and unlock the entrance via a web/mobile app. 
  Furthermore, I built a script to automate the check-in process at a gym.`,
}

export const SOCIALS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/colkard96',
    icon: 'instagram-fill',
    show: false,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Colkard',
    icon: 'github-fill',
    show: true,
  },
]
