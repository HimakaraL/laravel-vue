<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-center">
                        <h3>Profile</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="firstName">First Name</label>
                                    <p class="form-control-static" id="firstName">John</p>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="lastName">Last Name</label>
                                    <p class="form-control-static" id="lastName">Doe</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <p class="form-control-static" id="email">john.doe@example.com</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="status">Status</label>
                                    <p class="form-control-static" id="status">Single</p>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="telephone">Telephone</label>
                                    <p class="form-control-static" id="telephone">+1234567890</p>
                                </div>
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
    mounted() {
        console.log('Component Mounted')
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
