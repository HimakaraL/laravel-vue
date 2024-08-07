<template>
  <div class="container1 d-flex justify-content-between p-4 ">
    <h1 class="header-title">EPIT</h1>
    <div class="button-group">
      <button class="btn" type="button" @click="handleLogout()">Logout</button>
      <button class="btn" type="button" @click="handleDelete()" >Delete</button>
    </div>
  </div>
  <main class="bg-gray-200 h-screen">
    <div class="flex justify-center py-8">
      <div class="w-full md:w-3/4 lg:w-1/2 xl:w-1/2 p-4 bg-white shadow-md rounded-md">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a @click="setActiveTab('edit')" class="nav-link text-black hover:text-gray-700"
              :class="{ active: activeTab === 'edit' }">
              Edit Profile
            </a>
          </li>
          <li class="nav-item">
            <a @click="setActiveTab('view')" class="nav-link text-black hover:text-gray-700"
              :class="{ active: activeTab === 'view' }">
              View Profile
            </a>
          </li>
        </ul>
        <div v-if="activeTab === 'edit'">
          <EditForm />
        </div>
        <div v-if="activeTab === 'view'">
          <ViewProfile />
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import axios from 'axios';
import EditForm from '../js/components/EditFormComponent.vue';
import ViewProfile from '../js/components/ViewProfileComponent.vue';
import { useToast, POSITION } from 'vue-toastification';

const toast = useToast();

export default {
  data() {
    return {
      activeTab: 'view',
      token: '',
    };
  },
  components: {
    EditForm,
    ViewProfile,
  },
  created() {
    this.token = localStorage.getItem('token');
    if (!this.token) {
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
            Authorization: `Bearer ${this.token}`,
          },
        });
        localStorage.removeItem('token');
        toast.warning('Log out successful!', {
          timeout: 2000,
          position: POSITION.BOTTOM_LEFT,
          closeButton: false,
        });
        this.$router.push('/login');
      } catch (error) {
        console.log(error);
      }
    },

    async handleDelete(){
      try {
        
      } catch (error) {
        
      }
    }
  },
};
</script>

<style scoped>
.nav-tabs .nav-link.active {
  font-weight: bold;
  border-bottom: 2px solid #333;
}

.nav-item:hover {
  cursor: pointer;
}

.nav-link {
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 40px auto;
}

.bg-white {
  background-color: #fff;
}

.bg-gray-200 {
  background-color: #f7f7f7;
}


.text-black {
  color: #333;
}

.text-gray-700 {
  color: #666;
}

.hover:text-gray-700:hover {
  color: #666;
}

.rounded-t-lg {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.rounded-md {
  border-radius: 5px;
}

.container1 {
  background-color: #000000;
}

.header-title {
  color: #ffffff;
  font-family: Helvetica, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin: 0;
}

.button-group {
    display: flex;
    gap: 5%;
}

.btn {
    color: #ffffff;
    font-family: Helvetica, sans-serif;
    font-size: 1.1rem;
}

.btn:hover{
    cursor: pointer;
    color: white;
    background-color: #363636;
    transition: 0.4s;
}

</style>