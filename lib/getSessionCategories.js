export default async function getSessionCategories(token) {
    const session_categories = await fetch(`${process.env.NEXT_PUBLIC_API}/sessionscategoryapi`, {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`
        }
    })
    return await session_categories.json();
}