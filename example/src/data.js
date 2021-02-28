export const CVData = {
  personalData: {
    name: "Rakesh Chandrasekar",
    title: "Robotics/IoT Software Engineer",
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQHUFJOONuISfw/profile-displayphoto-shrink_400_400/0/1591795086252?e=1619049600&v=beta&t=fSuZkENjbkGKAWz8Rt0V6w4U6nWSLDri4oos6NE1s8Q",
    contacts: [
      { type: "email", value: "dwarakesh100@gmail.com" },
      { type: "phone", value: "+65 91468973" },
      { type: "location", value: "Singapore, Singapore Citizen" },
      { type: "website", value: "dwarakesh.com" },
      { type: "linkedin", value: "www.linkedin.com/in/rakesh13" },
      { type: "twitter", value: "https://twitter.com/rakesh131993" },
      { type: "github", value: "github.com/404" }
    ]
  },
  sections: [
    {
      type: "text",
      title: "Career Profile",
      content:
        "I am a project officer in the applied research industry with experience in mechanical design/analysis, robotics and internet of things applications. Being a self-motivated and driven individual, I work well independently and across many different teams to design innovative and practical solutions to solve technical and business challenges.",

      icon: "usertie"
    },
    {
      type: "common-list",
      title: "Education",
      icon: "graduation",
      items: [
        {
          title: "Bachelor of Engineering - Mechanical Engineering",
          authority: "Nanyang Technological University",
          authorityWebSite: "https://www.ntu.edu.sg",
          rightSide: "2016 - 2020"
        },
        {
          title: "Diploma in Mechanical Engineering",
          authority: "Ngee Ann Polytechnic",
          authorityWebSite: "https://www.np.edu.sg",
          rightSide: "2010 - 2013"
        }
      ]
    },
    {
      type: "experiences-list",
      title: "Experiences",
      description: "Optional",
      icon: "archive",
      items: [
        {
          title: "Robotics Software Engineer",
          company: "Continental AG",
          description:
            "Developing software solutions for Autonomous Mobile Robots (AMRs)",
          companyWebSite: "https://www.continental.com",
          companyMeta: "",
          datesBetween: "2017.10 - Present",
          descriptionTags: ["Javascript", "React", "ROS", "C++", "Python"]
        },
        {
          title: "Project Officer",
          company: "Nanyang Technological University",
          description:
            "- Developed python scripts for specialized industrial sensors to perform on single board computers and microcontrollers.\n - Implemented IoT based wireless data acquisition systems for remote energy resource mapping efforts. \n",
          companyWebSite: "https://www.ntu.edu.sg",
          companyMeta: "Little info about company",
          datesBetween: "2016.8 - 2017.10"
        },
        {
          title: "Intern",
          company: "Some Software Example INC",
          description: "I was warming up.",
          companyWebSite: "http://someexamplecompany.com",
          companyMeta: "SF USA",
          datesBetween: "2012.06 - 2012.10"
        }
      ]
    },
    {
      type: "projects-list",
      title: "Projects",
      description: "Optional",
      icon: "tasks",
      groups: [
        {
          sectionHeader: "Company Name",
          description: "Optional",
          items: [
            {
              title: "Project",
              projectUrl: "optional",
              description: "Optional"
            },
            {
              title: "Project",
              projectUrl: "optional",
              description: "Optional"
            },
            {
              title: "Project",
              projectUrl: "optional",
              description: "Optional"
            }
          ]
        }
      ]
    },
    {
      type: "common-list",
      title: "Conferences & Certificates",
      description: "",
      icon: "comments",
      items: [
        {
          title: "Some Conferences / 2019",
          authority: "SomeConf",
          authorityWebSite: "https://www.someconf.somesome"
        },
        {
          title: "Some Conferences / 2019",
          authority: "SomeConf",
          authorityMeta: "Speaker",
          authorityWebSite: "https://www.someconf.somesome",
          rightSide: "test"
        },
        {
          title: "Some Conferences / 2012",
          authorityMeta: "Speaker"
        }
      ]
    },
    {
      type: "common-list",
      title: "Languages",
      icon: "language",
      items: [
        {
          authority: "English",
          authorityMeta: "Professional"
        },
        {
          authority: "Spanish",
          authorityMeta: "Beginner"
        }
      ]
    },
    {
      type: "tag-list",
      title: "Skills Proficiency",
      icon: "rocket",
      items: ["React", "Javascript", "NodeJS", "Python", "C++", "ROS"]
    },
    {
      type: "tag-list",
      title: "Hobbies & Interests",
      icon: "cubes",
      items: ["Photography", "Poetry"]
    }
  ]
};
