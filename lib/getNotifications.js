export default async function getNotifications(token) {
    try {
        const notifications = await fetch(`${process.env.NEXT_PUBLIC_API}/notification_list_api`, {
            method: 'GET',
            headers: {
                'Content-Type': "Application/json",
                Authorization: `Bearer ${token}`
            }
        })
        return await notifications.json();
    } catch (error) {
        console.error('error', error)
    }
}