export default async function getShlokaSakhiData() {
    try {
        const data = JSON.parse(localStorage.getItem("user"));
  const module_key = JSON.parse(localStorage.getItem("module_key"));
  const get_shloka_sakhi_data = await fetch(
    `${process.env.NEXT_PUBLIC_API}/slokasakhi_api`,
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${data?.token}`,
      },
      body: JSON.stringify({
        user_key: `${data?.user_key}`,
        module_key: `${module_key}`,
        current_day: `${data?.current_day}`,
      }),
    }
  );
    
    return await get_shloka_sakhi_data.json();
    } catch (error) {
        console.error('error',error.message)
    }
  
}
