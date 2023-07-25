export default async function unreadNotification(token) {
    try {
        const unread = fetch(`${process.env.NEXT_PUBLIC_API}/unread_notification_count`, {
            method: 'POST',
            headers: {
                'Content-Type': "Application/json",
                Authorization: `${token}`
            }
        })
    } catch (error) {
        
    }
}