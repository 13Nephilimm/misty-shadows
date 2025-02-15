<template>
  <section class="start-page-section section">
    <h1 class="start-page-heading">Misty Shadows</h1>
    <button class="start-game-btn" @click="startGame">Start</button>
  </section>
</template>
<script>
export default {
  methods: {
    startGame() {
      this.$router.push("/name");
    },
  },
};
</script>
<style scoped>
.start-page-section {
  gap: 48px;
}

.start-page-heading {
  font-size: 80px;
  font-family: var(--accent-font);
  text-align: center;
  color: var(--dark-blue);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

.start-game-btn {
  min-width: 200px;
  font-size: 24px;
  position: relative;
  cursor: pointer;
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px #ffffff1a;
  background: radial-gradient(ellipse at bottom, #47515c 0%, #0b151e 45%);
  color: #ffffffa8;
  transition: all 1s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.start-game-btn::before {
  content: "";
  width: 70%;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 15%;
  background: #fff;
  background: linear-gradient(90deg, #ffffff00 0%, #fff 50%, #ffffff00 100%);
  opacity: 0.2;
  transition: all 1s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.start-game-btn:hover {
  color: #fff;
  transform: scale(1.1) translateY(-3px);
}

.start-game-btn:hover::before {
  opacity: 1;
}
</style>
