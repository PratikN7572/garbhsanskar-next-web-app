
const handleInfoStatus = (status, router) => {
  switch (status) {
    case 201:
      router?.push("/payment");
      break;
    case 101:
      document.getElementById("otpPopUp").showModal();
      break;
    case 404:
      router?.push("/not-found");
      break;
    case 302:
      router?.push("/auth/login");
      break;
  }
};
export default handleInfoStatus;
