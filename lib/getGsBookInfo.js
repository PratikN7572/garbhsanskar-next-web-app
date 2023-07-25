export default async function getGsBookInfo(token, body) {
    const gs_books = await fetch(`${process.env.NEXT_PUBLIC_API}/garbhsanskarbookinfoapi`, {
        method: 'POST',
        headers: {
            Accept: 'application/json; charset=utf-8',
                'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    })
    return await gs_books.json();
}