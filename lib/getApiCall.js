export const getApiCall = async (endpoint, headers) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/${endpoint}`,
      headers
    );
    const json = await response.json();
    // console.log("api.status in get Response:", json.status);
  } catch (error) {
    console.error("error", error.message);
  }
};
