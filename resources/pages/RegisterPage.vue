<template>
    <div class="container mt-5">
        <div class="justify-content-center align-items-center mb-5">
            <div class="header-group d-flex justify-content-center align-items-center">
                <button type="button" class="btn btn-dark" @click="$router.push('/')">Home</button>
                <h1>Sign up!</h1>
            </div>
            <div class="mb-3">
                <RegForm />
            </div>
            <div class="reg-link">
                <a @click="$router.push('/login')">Login?</a>
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
.header-group{
    text-align: center;
    gap: 10%;
}

.reg-link {
    text-align: center;
}

a:hover {
    cursor: pointer;
}

</style>