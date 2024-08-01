<template>
    <div class="container mt-5">
        <div class="justify-content-center align-items-center mb-5">
            <div class="header-group d-flex justify-content-center align-items-center">
                <button type="button" class="btn btn-dark" @click="$router.push('/')">Home</button>
                <h1>Login to Continue! </h1>
            </div>
            <div class="mb-3">
                <LoginForm />
            </div>
            <div class="reg-link">
                <a @click="$router.push('/register')">Not a member?</a>
            </div>
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
.header-group{
    text-align: center;
    gap: 5%;
}

.reg-link {
    text-align: center;
}

a:hover {
    cursor: pointer;
}

</style>