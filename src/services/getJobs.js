const getJobs = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = await fetch(
    "https://run.mocky.io/v3/fc0b8c76-27af-4860-93cd-fcaf0491c073",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));

  return result;
};

export default getJobs;
