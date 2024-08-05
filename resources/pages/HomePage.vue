<template>
    <div class="container mt-5">       
        <div class="d-flex flex-md-row flex-column justify-content-between align-items-center mb-5 header-container">
            <h1 class="header-title">Laravel + Vue with Sanctum Authentication WebApp</h1>
            <div class="button-group">
                <router-link to="/login" class="btn btn-success">LOGIN</router-link>
                <router-link to="/register" class="btn btn-dark">SIGNUP</router-link>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <img src="../images/Untitled design (1).png" alt="banner">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted');
    }
}
</script>

<style scoped>
.header-container {
    background: linear-gradient(to right, #ecf40fd5, #efcd53);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header-title {
    color: #000000;
    font-family: 'Arial', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    margin: 0;
}

.button-group {
    display: flex; 
    gap: 5%; 
}

img {
    max-width: 100%;
    height: auto;
}

.btn {
    border-radius: 15%;
}

.d-flex.flex-column .button-group{
    margin-top: 10px;
}

</style>
