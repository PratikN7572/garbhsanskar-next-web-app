export default async function getBooksList(token) {
    const books_list = await fetch(`${process.env.NEXT_PUBLIC_API}/garbhsanskarbookapi`, {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`
        }
    })
    return await books_list.json();
}