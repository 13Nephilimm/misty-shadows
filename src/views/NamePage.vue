<template>
  <section class="name-page-section section">
    <h1 class="game-logo">Misty Shadows</h1>
    <form @submit.prevent="submitForm" class="name-page-form">
      <h2 class="name-page-heading">Enter Your Username:</h2>
      <input
        type="text"
        v-model="username"
        placeholder="username..."
        @input="saveUsername"
        class="name-input"
        required
      />
      <button type="submit" class="name-sumbit-btn" @click="submitName">
        Done
      </button>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    saveUsername() {
      this.$store.commit("setUsername", this.username);
      localStorage.setItem("username", this.username);
    },
    submitForm() {
      if (!this.username) {
        alert("Username is required!");
      } else {
        this.$router.push("/characters");
      }
    },
  },
};
</script>
<style scoped>
.name-page-section {
  gap: 36px;
  position: relative;
}

.game-logo {
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--accent-font);
  color: var(--dark-blue);
  font-size: 64px;
  text-align: center;
}

.name-page-heading {
  font-size: 48px;
  text-align: center;
}

.name-page-form {
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 40vh;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-blue);
  border-radius: 8px;
  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.3);
  gap: 24px;
}

.name-input {
  background-color: transparent;
  border: 2px solid var(--text);
  padding: 8px 4px;
  border-radius: 8px;
  font-size: 24px;
  width: 80%;
}

.name-sumbit-btn {
  background-color: var(--blue);
  border-radius: 4px;
  border: 2px solid var(--text);
  padding: 10px 24px;
  font-size: 24px;
  text-transform: uppercase;
  width: 200px;
  font-weight: 700;
}

.name-sumbit-btn:hover {
  background-color: var(--blue-hover);
  cursor: pointer;
}
</style>
