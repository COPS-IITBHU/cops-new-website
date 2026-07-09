export interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  image: string;
}

export const coordinator: TeamMember[] = [
  {
    id: 1,
    name: 'Jayesh Krishan Puri',
    role: 'Secretary',
    email: 'jayesh@copsiitbhu.co.in',
    image: '/team/jayesh.jpeg',
  },
];

export const mentors: TeamMember[] = [
  {
    id: 2,
    name: 'Suryansh Garg',
    role: 'Joint Secretary',
    email: 'suryansh@copsiitbhu.co.in',
    image: '/team/suryansh.png',
  },
  {
    id: 3,
    name: 'Abhyudaya Singh',
    role: 'Joint Secretary',
    email: 'abhyudaya@copsiitbhu.co.in',
    image: '/team/abhyudaya.png',
  },
];

export const coreTeam: TeamMember[] = [
  {
    id: 4,
    name: 'Yug Sharma',
    role: 'IG Coordinator',
    email: 'yug@copsiitbhu.co.in',
    image: '/team/yug.jpeg',
  },
  {
    id: 5,
    name: 'Vidit Kumar',
    role: 'Senior Mentor',
    email: 'vidit@copsiitbhu.co.in',
    image: '/team/vidit.jpeg',
  },
  {
    id: 6,
    name: 'Swarit Srivastava',
    role: 'Core Member',
    email: 'swarit@copsiitbhu.co.in',
    image: '/team/swarit.jpeg',
  },
];