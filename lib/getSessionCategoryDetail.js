export default async function getSessionCategoryDetial(token, sessions_category_key) {
    const session_category_detail = await fetch(`${process.env.NEXT_PUBLIC_API}/sessiosndetailapi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({sessions_category_key: sessions_category_key})
    })
    return await session_category_detail.json();
}