export const convertDateFormat = (dateString) => {
  return new Intl.DateTimeFormat("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
};

export const convertToAcceptedJSValue = (dateString) => {
  return dateString.toISOString().split('T')[0]
}

export const dateToday = new Date().toISOString().split("T")[0];