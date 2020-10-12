export const setDate = (time) => {
  const currentDate = new Date(time);

  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return `${date}/${month}/${year}`;
};
