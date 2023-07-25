export default async function getActivities(token, body) {
  try {
    const activities = await fetch(
      `${process.env.NEXT_PUBLIC_API}/appmodule_api`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(body),
      }
    );
    return await activities.json();
  } catch (error) {
    console.error("error", error);
  }
}
