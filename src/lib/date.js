export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  try {
    return Intl.DateTimeFormat("en-US", options).format(date);
  } catch (e) {
    return "Invalid datetime format";
  }
};
