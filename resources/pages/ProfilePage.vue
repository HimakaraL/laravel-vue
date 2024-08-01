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
  import EditForm from '../js/components/EditFormComponent.vue';
  import ViewProfile from '../js/components/ViewProfileComponent.vue';
  
  export default {
    data() {
      return {
        activeTab: 'view', // default active tab
      };
    },
    name: 'ProfilePage',
    components: {
      EditForm,
      ViewProfile,
    },
    methods: {
      setActiveTab(tab) {
        this.activeTab = tab;
      },
      handleLogout() {
        if (confirm("Are you sure you want to log out?")) {
          // Implement logout logic here
          alert("Logged out successfully.");
        }
      },
      handleDeleteProfile() {
        if (confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
          // Implement delete profile logic here
          alert("Profile deleted successfully.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .nav-tabs .nav-link.active {
    font-weight: bold;
  }
  </style>
  