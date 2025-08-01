export const convertDateFormat = (dateString) => {
  return new Intl.DateTimeFormat("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
};
