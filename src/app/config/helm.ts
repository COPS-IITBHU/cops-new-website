interface TeamMember {
  name: string;
  email: string;
  por: string;
  photo?: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    website?: string;
  };
}

interface HelmTerm {
  term: string;
  team: TeamMember[];
}

const helm: HelmTerm[] = [
  {
    term: '2026-2027',
    team: [
      {
        name: 'Jayesh Krishan Puri',
        email: 'jayesh@copsiitbhu.co.in',
        por: 'Secretary',
        photo: '/team/jayesh.jpeg',
        socials: {},
      },
      {
        name: 'Suryansh Garg',
        email: 'suryansh@copsiitbhu.co.in',
        por: 'Joint Secretary',
        photo: '/team/suryansh.png',
        socials: {},
      },
      {
        name: 'Abhyudaya Singh',
        email: 'abhyudaya@copsiitbhu.co.in',
        por: 'Joint Secretary',
        photo: '/team/abhyudaya.png',
        socials: {},
      },
      {
        name: 'Yug Sharma',
        email: 'yug.sharma.cse24@iitbhu.ac.in',
        por: 'Technical Lead',
        photo: '/team/yug.jpeg',
        socials: {},
      },
      {
        name: 'Vidit Kumar',
        email: 'vidit.kumar.cer24@iitbhu.ac.in',
        por: 'Technical Lead',
        photo: '/team/vidit.jpeg',
        socials: {},
      },
      {
        name: 'Swarit Srivastava',
        email: 'swarit.srivastava.eee24@itbhu.ac.in',
        por: 'Category Head',
        photo: '/team/swarit.jpeg',
        socials: {},
      },
    ],
  },
  {
    term: '2025-2026',
    team: [
      {
        name: 'Sagnik Mandal',
        email: '',
        por: 'Secretary',
        photo: '/team/sagnik.jpg',
        socials: {},
      },
      {
        name: 'Pratham Seth',
        email: '',
        por: 'Joint Secretary',
        photo: '/team/pratham.jpeg',
        socials: {},
      },
      {
        name: 'Sakshi Kumar',
        email: '',
        por: 'Joint Secretary',
        photo: '/team/sakshi.jpeg',
        socials: {},
      },
      {
        name: 'Aayush Khanna',
        email: '',
        por: 'Technical Lead',
        photo: '/team/aayush.jpeg',
        socials: {},
      },
      {
        name: 'Parth Dabas',
        email: '',
        por: 'Technical Lead',
        photo: '/team/parth.jpeg',
        socials: {},
      },
      {
        name: 'Yashashwi Singhania',
        email: '',
        por: 'Category Head',
        photo: '/team/yashashwi.jpeg',
        socials: {},
      },
    ],
  },
  {
    term: '2024-2025',
    team: [
      {
        name: 'Shivansh Bhatnagar',
        email: '',
        por: 'Secretary',
        socials: {},
      },
      {
        name: 'Yuval Goyal',
        email: '',
        por: 'Joint Secretary',
        socials: {},
      },
      {
        name: 'Nikhil Totla',
        email: '',
        por: 'Joint Secretary',
        socials: {},
      },
      {
        name: 'Varun Kolanu',
        email: '',
        por: 'Software Development Group Head',
        socials: {},
      },
      {
        name: 'Jay Vinchhi',
        email: '',
        por: 'Competitive Programming Group Head',
        socials: {},
      },
      {
        name: 'Shashank Shekhar Singh',
        email: '',
        por: 'Intelligence Group Head',
        socials: {},
      },
      {
        name: 'Abhinav Lenka',
        email: '',
        por: 'Infosec Head',
        socials: {},
      },
    ],
  },
  {
    term: '2023-2024',
    team: [
      {
        name: 'Eshaan Aggarwal',
        email: '',
        por: 'Secretary',
        socials: {},
      },
      {
        name: 'Anshiv Singla',
        email: '',
        por: 'Joint Secretary',
        socials: {},
      },
      {
        name: 'Aakash Sharma',
        email: '',
        por: 'Joint Secretary',
        socials: {},
      },
      {
        name: 'Vaibhav Tripathi',
        email: '',
        por: 'Software Development Group Head',
        socials: {},
      },
      {
        name: 'Vaibhav Khater',
        email: '',
        por: 'Competitive Programming Group Head',
        socials: {},
      },
      {
        name: 'Dhruvi Jain',
        email: '',
        por: 'Intelligence Group Head',
        socials: {},
      },
      {
        name: 'Yash Somalkar',
        email: '',
        por: 'Infosec Head',
        socials: {},
      },
    ],
  },
];

export { helm };