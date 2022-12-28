export const getMonth = (month: number, year: number) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[month - 1]} ${year}`;
};

export const getSpend = (arr) => {
  let total = 0;
  arr.forEach((element) => (total += element.amount));
  return total;
};

export const getCurrency = (amount: number) => {
  const total = new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
  }).format(amount);

  return total
};

export const toDayDate = () :string => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const toDay = `${month}-${day}-${year}`
  return toDay
}