const getJobs = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = await fetch(
    "https://run.mocky.io/v3/f5ddeaaa-b840-4312-901e-35a9b867d44c",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));

  return result;
};

export default getJobs;
