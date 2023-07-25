export default async function getBannerDetails(token, body) {
  try {
    const get_banner_details = await fetch(
        `${process.env.NEXT_PUBLIC_API}/eventbannerapi`,
        {
          method: "POST",
            headers: {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        }
    );
      return await get_banner_details.json();
  } catch (error) {
    console.error('error',error.message)
  }
}
