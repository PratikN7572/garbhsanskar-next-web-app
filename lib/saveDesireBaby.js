export default async function saveDesireBaby(token, body) {
    try {
      const save_desire_baby = await fetch(
        `${process.env.NEXT_PUBLIC_API}/save_desire_baby`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(body),
        }
      );
      return await save_desire_baby.json();
    } catch (error) {
      console.error("error", error);
    }
  }
  