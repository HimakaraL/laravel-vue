<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center mb-5 header-container">
            <h1 class="header-title">Laravel + Vue with Sanctum Authentication WebApp</h1>
            <div class="button-group">
                <button type="submit" class="btn btn-success">LOGIN</button>
                <button type="submit" class="btn btn-warning">SIGNUP</button>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <img src="../images/welcome-back.png" class="centered-image" alt="Welcome Back">
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
    background: linear-gradient(to right, #1c4c87, #539aef);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header-title {
    color: #fff;
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

.centered-image {
    max-width: 100%;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
