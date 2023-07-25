export default async function getStoryDetail(token, body) {
  try {
    const story_detail = await fetch(
        `${process.env.NEXT_PUBLIC_API}/story_paid_api`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body)
      }
    );

    return await story_detail.json();
  } catch (error) {
    console.error("error", error);
  }
}
