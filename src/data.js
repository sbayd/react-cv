import { faCamera } from '@fortawesome/free-solid-svg-icons'

export const CVData = {
  personalData: {
    name: 'S.Berkay Aydın',
    title: 'Senior Software Developer',
    image: 'https://bulma.io/images/placeholders/128x128.png',
    contacts: [
      { type: 'email', value: 'sbaydin06@gmail.com' },
      { type: 'phone', value: '+90 (507) 808 41 30' },
      { type: 'website', value: 'sbaydin.com' },
      { type: 'linkedin', value: 'linkedin.com/in/sbaydin' },
      { type: 'twitter', value: 'twitter.com/sbaydin' },
      { type: 'github', value: 'github.com/sbayd' }
    ],
    languages: [
      { value: 'Turkish', level: 'Native' },
      { value: 'English', level: 'Professional' },
      { value: 'Spanish', level: 'Beginner' }
    ],
    interests: [
      'Pipes',
      'Analog Photography',
      'Cooking',
      'Archery',
      'Poems',
      'Drums'
    ]
  },
  sections: [
    {
      type: 'text',
      title: 'Career Profile',
      content: 'Hello dudes! This allows markdown or react components for formatting',
      icon: faCamera
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      description: 'Optional',
      icon: faCamera,
      items: [
        {
          title: 'Lead Software Developer',
          company: 'JotForm',
          description: 'I\'m working as a lead developer at JotForm Source team. We are creating some amazing features for JotForm!',
          companyWebSite: 'http://jotform.com',
          companyMeta: '',
          datesBetween: '2017.10 - Present'
        },
        {
          title: 'Software Developer',
          company: 'JotForm',
          description: 'I\'m using ReactJS and working as a front-end developer to develop new features for JotForm.',
          companyWebSite: 'http://jotform.com',
          companyMeta: '',
          datesBetween: '2016.8 - 2017.10'
        },
        {
          title: 'Full-Stack Developer',
          company: 'YD Software',
          description: 'I was using ASP.Net MVC Framework with N Tier Architecture to develop management systems, learning management systems & big data projects. And i was developing Android / IOS applications using Xamarin or NDK. You can see projects that I have completed for YD Software <a href=\'#projects\'>below.</a>',
          companyWebSite: 'http://ydyazilim.com',
          companyMeta: 'ANKARA METU Technopolis(ODTU Teknokent)',
          datesBetween: '2012 - 2016.8'
        },
        {
          title: 'Intern',
          company: 'YD Software',
          description: 'I was warming up with a Learning Management System including desktop and web apps.',
          companyWebSite: 'http://ydyazilim.com',
          companyMeta: 'ANKARA METU Technopolis(ODTU Teknokent)',
          datesBetween: '2012.06 - 2012.10'
        }
      ]
    },
    {
      type: 'projects-list',
      title: 'Projects',
      description: 'Optional',
      icon: faCamera,
      groups: [
        {
          sectionHeader: 'Company Name',
          description: 'Optional',
          items: [
            { title: 'Project', projectUrl: 'optional', description: 'Optional' },
            { title: 'Project', projectUrl: 'optional', description: 'Optional' },
            { title: 'Project', projectUrl: 'optional', description: 'Optional' }
          ]
        }
      ]
    },
    {
      type: 'tag-list',
      title: 'Skills Proficiency',
      icon: faCamera,
      items: ['Hello', 'Worlld']
    }
  ]
}
