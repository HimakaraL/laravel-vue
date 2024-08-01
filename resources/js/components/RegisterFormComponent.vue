<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-center">
                        <h3>Register</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="firstName">First Name</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="First Name">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="Last Name">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Email">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="status">Status</label>
                                    <select id="status" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>Married</option>
                                        <option>Single</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="telephone">Telephone</label>
                                    <input type="text" class="form-control" id="telephone" placeholder="Telephone">
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary btn-block">Submit</button>
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
    name: 'RegForm',
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

.row{
    margin-bottom: 2%;
}
</style>
