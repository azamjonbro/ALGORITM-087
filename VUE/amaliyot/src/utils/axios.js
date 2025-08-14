import  axios from 'axios'


const instance =axios.create({
 baseURL:"https://algoritm.safonon.uz",
 timeOut:5000,
 headers:{
  "Content-Type": "application/json",
 },
});

instance.interceptors.request.use(
 (config) => {
  const token =  localStorage.getItem("token")

  if (token) {
   config.headers.Authorization = `Bearer ${token}`
  }
  return config
 },
 (error) => promise.reject(error)
)


instance.interceptors.response.use (
 (response) => response, 
 (error) => {
  console.log("error", error.response?.data|| error.message);
  return Promise.reject(error)
 }
)

export default instance