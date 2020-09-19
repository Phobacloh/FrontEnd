export const allProjects = [
  {
    id: 2,
    title: "Book 1",
    description: "A Book by Admin",
    goal: 400,
    image:
      "https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg",
    is_open: true,
    date_created: "2020-09-03T05:35:50.335297Z",
    date_closed: "2020-09-19T13:35:00Z",
    sample: "Some content",
    pledges: [
      {
        id: 2,
        amount: 4000,
        comment: "Take my money!",
        anonymous: false,
        project_id: 2,
      },
    ],
    owner: 1,
    category: "Young Adult",
  },
  {
    id: 3,
    title: "Book 2",
    description: "Another Book",
    goal: 5000,
    image:
      "https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg",
    is_open: true,
    date_created: "2020-09-03T05:37:36.036417Z",
    date_closed: "2020-10-11T13:37:00Z",
    sample: "Some additional content",
    pledges: [],
    owner: 1,
    category: "Graphic Novels & Comics",
  },
  {
    id: 8,
    title: "Book By User3 again",
    description: "Still good",
    goal: 3400,
    image: "https://via.placeholder.com/300.jpg",
    is_open: true,
    date_created: "2020-09-15T13:22:24.905398Z",
    date_closed: "2020-03-20T14:28:23.159522Z",
    sample: "Content",
    pledges: [],
    owner: 3,
    category: "Mystery",
  },
];

export const oneProject = {
  id: 2,
  title: "Book 1",
  description: "A Book by Admin",
  goal: 400,
  image:
    "https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg",
  is_open: true,
  date_created: "2020-09-03T05:35:50.335297Z",
  date_closed: "2020-09-19T13:35:00Z",
  sample: "Some content",
  pledges: [
    {
      id: 2,
      amount: 4000,
      comment: "Take my money!",
      //you need to fix supporter to show in pledges
      supporter: "Anna",
      anonymous: false,
      project_id: 2,
    },
  ],
  owner: 1,
  category: "Young Adult",
};
