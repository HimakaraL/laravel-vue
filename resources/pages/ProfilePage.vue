<template>
  <div class="container mt-5">
    <header>
      <h1 class="mb-4">Profile</h1>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" :class="{ active: activeTab === 'edit' }" @click="setActiveTab('edit')">Edit Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: activeTab === 'view' }" @click="setActiveTab('view')">View Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="handleLogout">Logout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="handleDeleteProfile">Delete Profile</a>
        </li>
      </ul>
    </header>

    <div v-if="activeTab === 'edit'">
      <EditForm />
    </div>
    <div v-if="activeTab === 'view'">
      <ViewProfile />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import EditForm from '../js/components/EditFormComponent.vue';
import ViewProfile from '../js/components/ViewProfileComponent.vue';

export default {
  data() {
    return {
      activeTab: 'view',
      'token': ''
    };
  },
  name: 'ProfilePage',
  components: {
    EditForm,
    ViewProfile,
  },
  created() {
    this.token = localStorage.getItem('token');
    if(!this.token){
      console.log('Token not found');
      this.$router.push('/login');
    }
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    async handleLogout() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/logout', {}, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          },
        });
        localStorage.removeItem('token');
        alert('Logout successful!');
        this.$router.push('/login');
      } catch (error) {
        console.log(error);
      }
    },
    async handleDeleteProfile() {
      try {
        const response = await axios.delete('http://127.0.0.1:8000/api/deleteProfile', {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          },
        });
        localStorage.removeItem('token');
        alert('User deleted successfully!');
        this.$router.push('/login');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.nav-tabs .nav-link.active {
  font-weight: bold;
}

.nav-item:hover {
  cursor: pointer;
}
</style>