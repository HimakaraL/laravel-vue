<template>
    <div class="container1 d-flex justify-content-between p-4 ">
        <h1 class="header-title">EPIT</h1>
    </div>
    <div class="container2">
        <div class="mt-4 d-flex justify-content-center">
            <h1>Log in to continue</h1>
        </div>
        <div class="d-flex justify-content-center">
            <img src="../images/access-control-system-abstract-concept.png">
        </div>
        <div class="pt-0">
            <LoginForm/>
        </div>
    </div>
</template>

<script>
import LoginForm from '../js/components/LogInFormComponent.vue'

export default {
    name: 'LoginPage',
    components: {
        LoginForm,
    }
};
</script>

<style scoped>
.container1 {
    background-color: #000000;
}

.header-title {
    color: #ffffff;
    font-family: Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    margin: 0;
}

h1{
    font-family: Helvetica, sans-serif;
    font-size: 3rem;
}

img {
    max-width: 20%;
    height: auto;
}

@media (max-width: 500px){
    img{
        width: 35%;
    }

    h1{
        font-size: 2rem;
    }
}
</style>
