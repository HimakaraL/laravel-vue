<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-center">
                        <h3>Edit Profile</h3>
                    </div>
                    <div class="card-body text-center">
                        <form @submit.prevent="updateUser" v-if="userProfile">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="firstName">First Name</label>
                                    <input type="text" class="form-control" id="telephone"
                                        v-model="userProfile.first_name">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" class="form-control" id="telephone"
                                        v-model="userProfile.last_name">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="status">Status</label>
                                    <input type="text" class="form-control" id="telephone" v-model="userProfile.status">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="telephone">Telephone</label>
                                    <input type="text" class="form-control" id="telephone"
                                        v-model="userProfile.phone_no">
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="button" @click="updateUser()"
                                    class="btn btn-primary btn-block">Save</button>
                            </div>
                        </form>
                        <div v-else>
                            <h2>Loading....</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { POSITION, useToast } from 'vue-toastification';


export default {
    name: 'EditForm',
    data() {
        return {
            token: '',
            userProfile: null
        }
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

        async updateUser() {
            try {
                const response = await axios.put('http://127.0.0.1:8000/api/editProfile', this.userProfile, {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${this.token}`
                    }
                });
                const toast = useToast();
                toast.info('User updated successfully!', {
                    timeout: 4000,
                    icon: false,
                    position: POSITION.BOTTOM_LEFT,
                    closeButton: false
                });
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    },

    mounted() {
        this.token = localStorage.getItem('token');
        console.log(this.token);
        if (this.token) {
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
