export default async function getUserInfoData(token, uuid) {
  try {
    const userInfo = await fetch(
      `${process.env.NEXT_PUBLIC_API}/userinfo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
          uuid: `${uuid}`
        },
      }
    );
    return await userInfo.json();
  } catch (error) {
    console.error("error", error);
  }
}
