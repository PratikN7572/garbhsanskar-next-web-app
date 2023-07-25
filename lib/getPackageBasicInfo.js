export const getPackageBasicInfo = async (token, user_key) => {
    try {
        const packageBasicInfo = await fetch(`${process.env.NEXT_PUBLIC_API}/package_basic_info`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "POST",
            "Content-Type": "Application/json",
            body: JSON.stringify({
                user_key: `${user_key}`
            })
        })
        return await packageBasicInfo.json();
    } catch (error) {
        console.log("error",error.message);
    }
}