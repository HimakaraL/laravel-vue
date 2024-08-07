<template>
    <div class="form-body container">
        <div class="row justify-content-center align-items-center mt-4">
            <div class="col-md-8 col-lg-6 mt-2">
                <div class="form-content p-4 rounded border border-dark">
                    <div class="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <form class="requires-validation">
                            <div class="form-group mb-3">
                                <input class="form-control" v-model="form.first_name" type="text" id="first_name"
                                    placeholder="First Name">
                                <p class="errorPara" v-if="firstNameEmpty">First name field cannot be blank!</p>
                            </div>
                            <div class="form-group mb-3">
                                <input class="form-control" v-model="form.last_name" type="text" id="last_name"
                                    placeholder="Last Name">
                                <p class="errorPara" v-if="LastNameEmpty">Last name field cannot be blank</p>
                            </div>
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
                            <div class="form-group mb-3">
                                <select class="form-select" v-model="form.status" id="status" required>
                                    <option selected disabled value="">Status</option>
                                    <option value="Married">Married</option>
                                    <option value="Single">Single</option>
                                </select>
                                <p class="errorPara" v-if="statusEmpty">Please select your status</p>
                            </div>
                            <div class="form-group mb-3">
                                <input class="form-control" type="text" name="phone_no" placeholder="Telephone"
                                    v-model="form.phone_no" id="phone_no" required>
                                <p class="errorPara" v-if="phoneEmpty">Phone number field cannot be blank</p>
                                <p class="errorPara" v-if="phoneNumberError">Input must be a number with 10 digits</p>
                            </div>
                            <div class="form-button mb-4">
                                <button id="submit" type="button" @click="register()"
                                    class="btn">Register</button>
                            </div>
                            <p class="logHere">Already have an account <router-link to="/login" class="text-link"> Login
                                    here</router-link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useToast, POSITION } from "vue-toastification";

const toast = useToast();

export default {
    name: 'RegForm',
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                status: '',
                phone_no: '',
            },
            firstNameEmpty: false,
            LastNameEmpty: false,
            emailEmpty: false,
            passwordEmpty: false,
            statusEmpty: false,
            phoneEmpty: false,
            emailError: false,
            phoneNumberError: false,
        };
    },

    methods: {
        validateForm() {
            this.firstNameEmpty = this.form.first_name === '';
            this.LastNameEmpty = this.form.last_name === '';
            this.emailEmpty = this.form.email === '';
            this.passwordEmpty = this.form.password === '';
            this.statusEmpty = this.form.status === '';
            this.phoneEmpty = this.form.phone_no === '';

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailError = !emailPattern.test(this.form.email);

            this.phoneNumberError = isNaN(this.form.phone_no) || this.form.phone_no.length !== 10;

            return !(
                this.firstNameEmpty ||
                this.LastNameEmpty ||
                this.emailEmpty ||
                this.passwordEmpty ||
                this.statusEmpty ||
                this.phoneEmpty ||
                this.emailError ||
                this.phoneNumberError
            );
        },


        async register() {
            const isValid = this.validateForm();

            if (isValid) {
                try {
                    const response = await axios.post('http://127.0.0.1:8000/api/register', this.form);
                    toast.success('Sign up successful', {
                        timeout: 4000,
                        icon: false,
                        position: POSITION.BOTTOM_LEFT,
                        closeButton: false
                    })
                    this.$router.push('/');
                } catch (error) {
                    console.log(this.form);
                    console.error(error);
                    toast.error('Registration failed. Please check your inputs.', {
                        timeout: 4000,
                        icon: false,
                        position: POSITION.BOTTOM_LEFT,
                        closeButton: false
                    });
                }
            } else {
                toast.error('Please check your inputs.', {
                    timeout: 4000,
                    icon: false,
                    position: POSITION.BOTTOM_LEFT,
                    closeButton: false
                });
            }
        },
    }
}
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
