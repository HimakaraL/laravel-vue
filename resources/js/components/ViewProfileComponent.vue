<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card justify-content-center">
                    <div class="card-header text-center">
                        <h3>Profile</h3>
                    </div>
                    <div class="card-body" v-if="userProfile">
                        <form>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="firstName">First Name</label>
                                    <p class="form-control-static" id="firstName">{{ userProfile.first_name }}</p>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="lastName">Last Name</label>
                                    <p class="form-control-static" id="lastName">{{ userProfile.last_name }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <p class="form-control-static" id="email">{{ userProfile.email }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="status">Status</label>
                                    <p class="form-control-static" id="status">{{ userProfile.status }}</p>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="telephone">Telephone</label>
                                    <p class="form-control-static" id="telephone">{{ userProfile.phone_no }}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-else>
                        <h2>Loading.....</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';



export default {
    name: 'ViewProfile',
    data() {
        return {
            'token': '',
            'userProfile': null
        };
    },

    methods: {
        async getUser() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/profile', {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${this.token}`
                    }
                });
                this.userProfile = response.data.data;
                console.log(this.userProfile);
            } catch (error) {
                console.error(error);
            }
        },
    },

    mounted() {
        this.token = localStorage.getItem('token');
        console.log(this.token);
        if(this.token) {
            this.getUser();
        } else {
            console.log("Token not found");
        };
    }
}
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

.form-control-static {
    background-color: #f8f9fa;
    padding: 0.375rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    color: #495057;
}

.text-center {
    text-align: center;
}

.row {
    margin-bottom: 2%;
}
</style>
