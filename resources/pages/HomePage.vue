<template>
        <div class="container1 d-flex justify-content-between p-4 ">
            <h1 class="header-title">EPIT</h1>
            <div class="button-group">
                <router-link to="/login" class="btn">Login</router-link>
                <router-link to="/register" class="btn">Signup</router-link>
            </div>
        </div>
        <div class="container2 d-flex justify-content-between p-4">
            <div class="p-5 fw-bold">
                <h1 class="logHead">Log in to access your account</h1>
            </div>
            <div class="imgClass">
                <img src="../images/pair-programming-concept-illustration.png" alt="homeImg"/>
            </div>
            <div>

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
.header-title {
    color: #ffffff;
    font-family: Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    margin: 0;
}

.button-group {
    display: flex;
    gap: 5%;
}

.btn {
    color: #ffffff;
    font-family: Helvetica, sans-serif;
    font-size: 1.1rem;
}

.btn:hover{
    cursor: pointer;
    color: white;
    background-color: #363636;
    transition: 0.4s;
}

.container1 {
    background-color: #000000;
}

.container2 {
    background-color: rgb(235, 231, 231);
}

img{
    max-width: 75%;
    height: auto;
}

.imgClass{
    align-items: center;
    justify-content: center;
    text-align: center;
}

.headerP {
    font-family: Helvetica, sans-serif;
}

.logHead {
    font-size: 4rem;
}

@media (max-width: 900px){
    .container2{
        flex-direction: column;
    }
}
</style>
