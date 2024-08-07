<template>
    <div class="form-body container">
        <div class="row justify-content-center align-items-center mt-4">
            <div class="col-md-8 col-lg-6 mt-2">
                <div class="form-content p-4 rounded border border-dark">
                    <div class="form-items">
                        <form class="requires-validation">
                            <div class="form-group mb-3">
                                <input class="form-control" v-model="form.email" type="email"
                                    placeholder="E-mail Address" id="email" required>
                                <p class="errorPara" v-if="emailEmpty">Email field cannot be blank</p>
                                <p class="errorPara" v-if="emailError">Input must be an email</p>
                            </div>
                            <div class="form-group mb-3">
                                <input class="form-control" v-model="form.password" type="password"
                                    placeholder="Password" id="password" required>
                                <p class="errorPara" v-if="passwordEmpty">Password field cannot be blank</p>
                            </div>

                            <div class="form-button mb-4">
                                <button id="submit" type="button" @click="login()" class="btn">Login</button>
                            </div>
                            <p class="logHere">New member? <router-link to="/register" class="text-link"> Sign up
                                    here</router-link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { POSITION, useToast } from 'vue-toastification';

const toast = useToast();

export default {
    name: 'LoginForm',

    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            emailEmpty: false,
            passwordEmpty: false,
            emailError: false

        };
    },

    methods: {

        //Validate input fields
        validateForm(){
            this.emailEmpty = this.form.email === '';
            this.passwordEmpty = this.form.password === '';

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailError = !emailPattern.test(this.form.email);

            return !(
                this.emailEmpty ||
                this.passwordEmpty ||
                this.emailError
            )
        },

        //login function
        async login() {
            const isValid = this.validateForm();
            if(isValid){
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', this.form).then((response) => {
                    localStorage.setItem('token', response.data.token);
                })
                this.$router.push('/profile');
                toast.success('Login successful!', {
                    timeout: 4000,
                    position: POSITION.BOTTOM_LEFT,
                    icon: false,
                    closeButton: false
                })
            } catch (error) {
                console.error(error);
                toast.error('Incorrect credentials', {
                    timeout: 4000,
                    position: POSITION.BOTTOM_LEFT,
                    icon: false,
                    closeButton: false
                })
            }}else {
                console.error(error);
                toast.error('Check your credentials', {
                    timeout: 4000,
                    position: POSITION.BOTTOM_LEFT,
                    icon: false,
                    closeButton: false
                })
            }
        },
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');

*,
body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
}

html,
body {
    height: 100%;
    background-color: #152733;
}

.form-body {
    padding: 20px;
}

.form-content {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-items h3 {
    color: #000000;
    font-size: 24px;
    font-weight: 600;
}

.form-items p {
    color: #000000;
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 20px;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.form-group input::placeholder {
    color: #999;
}

.form-button .btn {
    background-color: #000000;
    color: #ffffff;
}

.form-button .btn:hover {
    background-color: #454545;
    color: #ffffff;
}


.form-content .errorPara {
    color: #ff606e;
    font-size: 0.8rem;
}

.logHere {
    text-align: center;
}

form .form-button{
    display: flex;
    justify-content: center;
}

.text-link {
    margin-left: 2%;
}

@media (max-width: 576px) {
    .form-content {
        padding: 20px;
    }

    .form-items h3 {
        font-size: 20px;
    }

    .form-items p {
        font-size: 14px;
    }
}
</style>
