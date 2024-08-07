<template>
    <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content mw-100">
                    <div class="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <form class="requires-validation">
                            <div class="col-md-12">
                                <input class="form-control" v-model="form.first_name" type="text" id="first_name"
                                    placeholder="First Name">
                                <p class="errorPara" v-if="firstNameEmpty">First name field cannot be blank!</p>
                            </div>
                            <div class="col-md-12">
                                <input class="form-control" v-model="form.last_name" type="text" id="last_name"
                                    placeholder="Last Name">
                                <p class="errorPara" v-if="LastNameEmpty">Last name field cannot be blank </p>
                            </div>
                            <div class="col-md-12">
                                <input class="form-control" v-model="form.email" type="email"
                                    placeholder="E-mail Address" id="email" required>
                                <p class="errorPara" v-if="emailEmpty">Email field cannot be blank</p>
                                <p class="errorPara" v-if="emailError">Input must be an email</p>
                            </div>
                            <div class="col-md-12">
                                <input class="form-control" v-model="form.password" type="password"
                                    placeholder="Password" id="password" required>
                                <p class="errorPara" v-if="passwordEmpty">password field cannot be blank</p>
                            </div>
                            <div class="col-md-12">
                                <select class="form-select mt-3" v-model="form.status" id="status" required>
                                    <option selected disabled value="">Status</option>
                                    <option value="jweb">Married</option>
                                    <option value="sweb">Single</option>
                                </select>
                                <p class="errorPara" v-if="statusEmpty">Please select your status</p>
                            </div>
                            <div class="col-md-12">
                                <input class="form-control mb-3" type="text" name="phone_no" placeholder="Telephone"
                                    v-model="form.phone_no" id="phone_no" required>
                                <p class="errorPara" v-if="phoneEmpty">Phone number field cannot be blank</p>
                                <p class="errorPara" v-if="phoneNumberError">Input must be a number with 10 digits</p>
                            </div>
                            <div class="form-button mt-3 mb-5">
                                <button id="submit" type="button" @click="register()"
                                    class="btn btn-primary">Register</button>
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
                    toast.success('Sign up successfull', {
                        timeout: 4000,
                        icon: false,
                        position: POSITION.TOP_RIGHT,
                        closeButton: false
                    })
                    this.$router.push('/login');
                } catch (error) {
                    console.log(this.form);
                    console.error(error);
                    toast.error('Registration failed. Please check your inputs.', {
                        timeout: 4000,
                        icon: false,
                        position: POSITION.TOP_RIGHT,
                        closeButton: false
                    });
                }
            } else {
                console.error(error);
                toast.error('Please check your inputs.', {
                    timeout: 4000,
                    icon: false,
                    position: POSITION.TOP_RIGHT,
                    closeButton: false
                })
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

.form-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
}

.form-holder .form-content {
    position: relative;
    text-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 60px;
}

.form-content .form-items {
    border: 3px solid #000000;
    padding: 40px;
    display: inline-block;
    width: 100%;
    min-width: 540px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-align: left;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.form-content h3 {
    color: #000000;
    text-align: left;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
}

.form-content h3.form-title {
    margin-bottom: 30px;
}

.form-content p {
    color: #000000;
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 30px;
}


.form-content label,
.was-validated .form-check-input:invalid~.form-check-label,
.was-validated .form-check-input:valid~.form-check-label {
    color: #000000;
}

.form-content input[type=text],
.form-content input[type=password],
.form-content input[type=email],
.form-content select {
    width: 100%;
    padding: 9px 20px;
    text-align: left;
    border: 1px solid #323232;
    outline: 0;
    border-radius: 6px;
    background-color: #ffffff;
    font-size: 15px;
    font-weight: 300;
    color: #000000;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin-top: 16px;
}


.btn-primary {
    background-color: #000000;
    outline: none;
    border: 0px;
    box-shadow: none;
}

.form-content textarea {
    position: static !important;
    width: 100%;
    padding: 8px 20px;
    border-radius: 6px;
    text-align: left;
    background-color: #ffffff;
    border: 0;
    font-size: 15px;
    font-weight: 300;
    color: #ffffff;
    outline: none;
    resize: none;
    height: 120px;
    -webkit-transition: none;
    transition: none;
    margin-bottom: 14px;
}

.form-content textarea:hover,
.form-content textarea:focus {
    border: 0;
    background-color: #000000;
    color: #ffffff;
}

.mv-up {
    margin-top: -9px !important;
    margin-bottom: 8px !important;
}

.invalid-feedback {
    color: #ff606e;
}

.valid-feedback {
    color: #2acc80;
}

.form-items .form-control::placeholder {
    color: #000000;
}

.form-button {
    display: flex;
    justify-content: center;
}

.btn:hover {
    background-color: #323232;
}

.logHere {
    display: flex;
    justify-content: center;
}

.text-link {
    margin-left: 2%;
}

.form-content .errorPara{
    color: #ff606e;
    font-size: 0.8rem;
}

@media(max-width: 768px) {

}
</style>
