function fetchDataFromLocalStorage(key) {
    return new Promise((resolve, reject) => {
      try {
        const data = localStorage.getItem(key);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  export default async function getLocalStorageData(key) {
    try {
      const data = await fetchDataFromLocalStorage(key);
      console.log('Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  