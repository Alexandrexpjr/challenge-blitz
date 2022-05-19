export const formatDate = (date) => {
  const [year, month, rest] = date.split('-');
  const [day, timeWithSeconds] = rest.split('T');
  const [time] = timeWithSeconds.split('.');
  return { date: day + '/' + month + '/' + year, time}
}