/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
  title: string
  startDate: string
  endDate?: string
  company: string
  location: string
  description: string
  goals: string[]
  currentJob: boolean
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
  {
    title: 'Frontend Developer',
    startDate: '2018-05-10',
    company: 'Accenture',
    location: 'Spain / Remote',
    description:
      'Developed and maintained web applications using NodeJs, Vue, Angular, React and Tailwind CSS.',
    goals: [
      'Developed and maintained web applications using NodeJs, Vue, Angular, React, MongoDB and Tailwind CSS.',
      'Worked with several teams with Agile methodologies to deliver high-quality software products.',
      `I've worked with clients to understand their needs and turn them into practical solutions.`,
      `I've estimated project timelines and effort to help plan work more effectively.`,
    ],
    currentJob: true,
  },
  {
    title: 'Software Engineer',
    startDate: '2017-02-01',
    endDate: '2017-12-10',
    company: 'Datumize',
    location: 'Spain',
    description:
      'Worked on a data collection project using web scraping with Python, storing the gathered data in MySQL and building the front-end with Angular.',
    goals: [
      'Worked on a data collection project using web scraping with Python, storing the gathered data in MySQL and building the front-end with Angular.',
      'Followed Scrum methodology, which helped me improve my workflow and start applying software development best practices, including design patterns.',
    ],
    currentJob: false,
  },
]
export default workExperience
