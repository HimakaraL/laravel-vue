<template>
    <div class="container1 d-flex justify-content-between p-4 ">
        <h1 class="header-title">EPIT</h1>
    </div>
    <div class="container2">
        <RegForm />
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

</style>
