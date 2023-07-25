export const postApiCall = async (credentials, endpoint, headers) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(credentials),
        ...headers,
      }
    );
    return await response.json();
  } catch (error) {
    console.error("error", error.message);
  }
};
// https://happygs.garbhsanskarguru.com/v1
