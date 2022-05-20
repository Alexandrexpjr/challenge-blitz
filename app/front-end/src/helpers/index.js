export const formatDateTime = (dateTime) => {
  const localDateTime = new Date(dateTime).toLocaleString("pt-BR");
  const [date, time] = localDateTime.split(' ');
  return { date, time }
}