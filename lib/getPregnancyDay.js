
export default async function getPregnancyDay(token, current_day){
    try {
        const pregnancyDay = await fetch(`${process.env.NEXT_PUBLIC_API}/getpregnancydaysapi/${current_day}`, {
            headers: {
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${token}`
            },
            method: "GET",
        })
        return await pregnancyDay.json();
    } catch (error) {
        console.log("error",error.message);
    }
}