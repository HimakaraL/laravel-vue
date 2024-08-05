<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text-center">
                        <h3>Login</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input v-model="form.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Password" required>
                            </div>
                            <div class="text-center">
                                <button type="button" @click="login()" class="btn btn-primary btn-block">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginForm',

    data(){
        return {
            form: {
                email: '',
                password: ''
            }
        };
    },

    methods: {
        async login() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', this.form).then((response) => {
                    localStorage.setItem('token', response.data.token);
                })
                this.$router.push('/profile'); 
            } catch (error) {
                console.error(error);
                alert('Login failed. Incorrect credentials');
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

.form-group{
    margin-bottom: 2%;
}
</style>
