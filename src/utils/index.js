export const convertDate = (date) => {
  const month = new Date(date).toLocaleString('en-US', {
    month: 'short',
  });
  const day = new Date(date).toLocaleString('en-US', { day: '2-digit' });
  const year = new Date(date).getFullYear();
  return `${day} ${month}, ${year}`;
};
