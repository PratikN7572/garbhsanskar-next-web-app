export default async function getTodayTip(token, payment_status, body) {
    let end_point = "";
    if (payment_status === 'paid_plan') {
        end_point = 'paid_tips_api'
    } else {
        end_point = 'free_tips_api'
    }
    const today_tip = await fetch(`${process.env.NEXT_PUBLIC_API}/${end_point}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
    return today_tip.json();
}