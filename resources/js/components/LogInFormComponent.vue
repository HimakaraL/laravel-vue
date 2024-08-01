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
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary btn-block">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
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
