export default async function getCities(city_name) {
    try {
        const get_cities = await fetch(`${process.env.NEXT_PUBLIC_API}/search_city/${city_name}`)
        return await get_cities.json();
    } catch (error) {
        console.log('error',error.message)
    }
}