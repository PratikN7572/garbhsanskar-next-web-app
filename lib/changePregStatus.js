export default async function changePregStatus(token,user_key,pregnancyStatus, lmpDate,router ) {
    try {
        const pregStatusRes = await postApiCall(
          { user_type: pregnancyStatus },
          "change_pregnancy_status",
          {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const lmpDateRes = await postApiCall(
          {
            user_key: user_key,
            lmp_date: lmpDate,
          },
          "change_lmp_date_api",
          {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        Promise.all([pregStatusRes, lmpDateRes]).then(() => {
          // Both POST requests have completed successfully
        // Do something with post1Response and post2Response
          localStorage.setItem('user',JSON.stringify({...user, user_type: pregnancyStatus}))
          router.push("/dashboard/home");
        });
      } catch (error) {
        console.error(error);
      }
}