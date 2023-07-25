export default async function getDesireBabyList(token) {
    try {
      const desire_baby_list = await fetch(
        `${process.env.NEXT_PUBLIC_API}/desire_baby`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "Application/json",
          },
        }
      );
      return await desire_baby_list.json();
    } catch (error) {
      console.error("error", error);
    }
  }
  