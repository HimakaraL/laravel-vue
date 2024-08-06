<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-center">
                        <h3>Register</h3>
                    </div>
                    <div class="card-body">
                        <!-- @submit.prevent="register" -->
                        <form>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="first_name">First Name</label>
                                    <input v-model="form.first_name" type="text" class="form-control" id="first_name"
                                        placeholder="First Name" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="last_name">Last Name</label>
                                    <input v-model="form.last_name" type="text" class="form-control" id="last_name"
                                        placeholder="Last Name" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input v-model="form.email" type="email" class="form-control" id="email"
                                        placeholder="Email" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="password">Password</label>
                                    <input v-model="form.password" type="password" class="form-control" id="password"
                                        placeholder="Password" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="status">Status</label>
                                    <input v-model="form.status" type="text" class="form-control" id="status" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="phone_no">Telephone</label>
                                    <input v-model="form.phone_no" type="text" class="form-control" id="phone_no"
                                        placeholder="Telephone" required>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="button" @click="register()"
                                    class="btn btn-primary btn-block">Register</button>
                            </div>
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
            }
        };
    },

    methods: {
        async register() {
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
        },
    }
};


</script>

<style scoped>
.container {
    margin-top: 50px;
}

.card-header {
    background-color: #007bff;
    color: white;
    padding: 15px;
}

.card-header h3 {
    margin: 0;
}

.btn-primary {
    margin-top: 3%;
    margin-bottom: 3%;
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #004085;
}

.form-control {
    border-radius: 0.25rem;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    transition: box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

.form-control:focus {
    border-color: #80bdff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.form-group label {
    font-weight: bold;
}

.text-center {
    text-align: center;
}

.row {
    margin-bottom: 2%;
}
</style>
