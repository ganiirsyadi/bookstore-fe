export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  }
  return Intl.DateTimeFormat("en-US", options).format(date)
}