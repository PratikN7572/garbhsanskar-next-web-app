export default async function completedActivity(body1) {
  
  try {
    const data = JSON.parse(localStorage.getItem("user"))
    const module = JSON.parse(localStorage.getItem('module_info'))
    const complete_activity = await fetch(
      `${process.env.NEXT_PUBLIC_API}/complete_activity`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          user_key: `${data.user_key}`,
          completedKey: `${module.completed_key}`,
          current_day: data.current_day,
          module_key: `${module.key}`,
          module_name: `${module.module_name}`,
          ...body1
        }),
      }
    );
    return await complete_activity.json();
  } catch (error) {
    console.error("error", error.message);
  }
}
