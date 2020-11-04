//Function that makes the call to the API

const getJobs = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = await fetch(
    "https://us-central1-jolby-dda21.cloudfunctions.net/app/api/v1/jobs",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));

  return result;
};

export default getJobs;
