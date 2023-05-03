export default function getStringDate(date: Date) {
  const [year, month, day] = date.toString().split('-');
  const monthNum = parseInt(month, 10);
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(0, monthNum - 1));

  return `${monthName} ${parseInt(day, 10)}, ${year}`;
}
