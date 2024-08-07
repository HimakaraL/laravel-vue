<template>
    <div class="form-body container">
        <div class="row justify-content-center align-items-center mt-4">
            <div class="col-md-8 col-lg-6 mt-2">
                <div class="form-content p-4 rounded border border-dark">
                    <div class="form-items">
                        <form class="requires-validation" @submit.prevent="updateUser" v-if="userProfile">
                            <div class="form-group mb-3">
                                <label>First Name</label>
                                <input class="form-control" v-model="userProfile.first_name" type="text" id="first_name"
                                    placeholder="First Name">
                            </div>
                            <div class="form-group mb-3">
                                <label>Last Name</label>
                                <input class="form-control" v-model="userProfile.last_name" type="text" id="last_name"
                                    placeholder="Last Name">
                            </div>
                            <div class="form-group mb-3">
                                <label>Status</label>
                                <select class="form-select" v-model="userProfile.status" id="status">
                                    <option selected disabled value="">Status</option>
                                    <option value="Married">Married</option>
                                    <option value="Single">Single</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label>Telephone</label>
                                <input class="form-control" v-model="userProfile.phone_no" type="text" id="phone_no"
                                    placeholder="Phone Number">
                                <p class="errorPara" v-if="phoneNumberError">Input must be a number with 10 digits</p>
                            </div>
                            <div class="form-button mb-4">
                                <button id="submit" type="submit" class="btn">Save</button>
                            </div>
                        </form>
                        <div v-else>
                            <h1>Loading...</h1>
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
            userProfile: null,
            phoneNumberError: false
        };
    },
    methods: {
        validatePhn() {
            this.phoneNumberError = isNaN(this.userProfile.phone_no) || this.userProfile.phone_no.length !== 10;
            return !this.phoneNumberError;
        },
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
            const isValid = this.validatePhn();
            const toast = useToast();

            if (isValid) {
                try {
                    const response = await axios.put('http://127.0.0.1:8000/api/editProfile', this.userProfile, {
                        headers: {
                            Accept: 'application/json',
                            Authorization: `Bearer ${this.token}`
                        }
                    });
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
            } else {
                toast.error('User update unsuccessful!', {
                    timeout: 4000,
                    icon: false,
                    position: POSITION.BOTTOM_LEFT,
                    closeButton: false
                });
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
        }
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

form .form-button {
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
