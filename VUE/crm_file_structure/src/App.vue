<template >
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    let token = localStorage.getItem('token');
    if (token) {
      console.log('Token found:', token);
      this.$router.push('/');  // Redirect to home page if token exists
      fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      }) 
      .then(response => response.json())
      .then(data => {
        console.log('User data:', data);
        if(data.status==200 || data.user){
          this.$router.push('/');  // Redirect to home page if user data is valid
        } else {
          console.log('Invalid user data, redirecting to login...');
          this.$router.push('/login');  // Redirect to login page if user data is invalid
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    } else {
      // Token does not exist, you can redirect to login or show a message
      console.log('No token found, redirecting to login...');
      this.$router.push('/login');  // Redirect to login page
    }
  }
}
</script>
<style>

</style>