interface walletList {
  id: number;
  month: number;
  year: number;
  actualSalary: number;
  closed: boolean;
  bills: billsList[];
}

interface billsList {
  id: number;
  date: string;
  description: string;
  amount: number;
  shared: boolean;
}

const walletData: walletList[] = [
  {
    id: 1,
    month: 11,
    year: 2022,
    closed: false,
    actualSalary: 3000000,
    bills: [
      {
        id: 1,
        date: "11-25-2022",
        description: "Rent",
        amount: 450000,
        shared: true,
      },
      {
        id: 3,
        date: "11-28-2022",
        description: "Any game",
        amount: 20000,
        shared: false,
      },
      {
        id: 2,
        date: "11-29-2022",
        description: "Dog's food",
        amount: 100000,
        shared: true,
      },
    ],
  },
  {
    id: 2,
    month: 11,
    year: 2022,
    closed: true,
    actualSalary: 3000000,
    bills: [
      {
        id: 1,
        date: "11-25-2022",
        description: "Rent",
        amount: 450000,
        shared: true,
      },
    ],
  },
  {
    id: 3,
    month: 7,
    year: 2022,
    closed: true,
    actualSalary: 3000000,
    bills: [
      {
        id: 1,
        date: "11-25-2022",
        description: "Rent",
        amount: 4500000,
        shared: true,
      },
    ],
  },
  {
    id: 4,
    month: 9,
    year: 2022,
    closed: true,
    actualSalary: 3000000,
    bills: [
      {
        id: 1,
        date: "11-25-2022",
        description: "Rent",
        amount: 3000000,
        shared: true,
      },
    ],
  },
  {
    id: 5,
    month: 9,
    year: 2022,
    closed: false,
    actualSalary: 3000000,
    bills: [],
  },
];

export default walletData;
