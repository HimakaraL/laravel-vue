<template>
    <div class="container mt-5">
        <router-link to="/" class="btn btn-primary mb-3">HOME</router-link>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="header-group d-flex flex-column justify-content-center align-items-center mb-4">
                <h1 class="text-center">Sign up!</h1>
            </div>
            <div class="mb-4 w-100 d-flex justify-content-center">
                <RegForm />
            </div>
            <div class="reg-link text-center mt-3">
                <router-link to="/login" class="text-link">Login here</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import RegForm from '../js/components/RegisterFormComponent.vue';

export default {
    name: 'RegPage',
    components: {
        RegForm,
    }
};
</script>

<style scoped>
.header-group {
    text-align: center;
}

.btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.btn-primary:hover {
    background-color: #0056b3; 
}

.text-link {
    color: #007bff; 
    text-decoration: none;
}

.text-link:hover {
    text-decoration: underline;
}

.reg-link {
    margin-top: 20px;
}
</style>
