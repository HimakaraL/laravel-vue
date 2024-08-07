<template>
    <div class="form-body container">
        <div class="row justify-content-center align-items-center mt-4">
            <div class="col-md-8 col-lg-6 mt-2">
                <div class="form-content p-4 rounded border border-dark">
                    <div class="form-items">
                        <form v-if="userProfile" class="requires-validation">
                            <div class="form-group mb-3">
                                <label for="firstName">First Name</label>
                                <p class="form-control-static" id="firstName">{{ userProfile.first_name }}</p>
                            </div>
                            <div class="form-group mb-3">
                                <label for="lastName">Last Name</label>
                                <p class="form-control-static" id="lastName">{{ userProfile.last_name }}</p>
                            </div>
                            <div class="form-group mb-3">
                                <label for="email">Email</label>
                                <p class="form-control-static" id="email">{{ userProfile.email }}</p>
                            </div>
                            <div class="form-group mb-3">
                                <label for="status">Status</label>
                                <p class="form-control-static" id="status">{{ userProfile.status }}</p>
                            </div>
                            <div class="form-group mb-3">
                                <label for="telephone">Telephone</label>
                                <p class="form-control-static" id="telephone">{{ userProfile.phone_no }}</p>
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



export default {
    name: 'ViewProfile',
    data() {
        return {
            'token': '',
            'userProfile': null
        };
    },

    methods: {
        //get profile info
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
        if (this.token) {
            this.getUser();
        } else {
            console.log("Token not found");
        };
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
