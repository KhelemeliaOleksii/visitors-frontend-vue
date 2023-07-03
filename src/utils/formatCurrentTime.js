const fillZeroes = (value) => {
  return value < 10 ? "0" + value : value;
};

export const formatCurrentTime = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formatedTime = `${year}-${fillZeroes(month)}-${fillZeroes(
    day
  )}, ${fillZeroes(hours)}:${fillZeroes(minutes)}:${fillZeroes(seconds)}`;
  return formatedTime;
};
