<template>
  <section class="characters-section section">
    <h1 class="game-logo">Misty Shadows</h1>
    <h2 class="characters-heading">Choose Your Character</h2>
    <div class="characters-container"></div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      username: this.$store.state.username,
    };
  },
  methods: {},
};
</script>
<style scoped>
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

.characters-heading {
  text-transform: uppercase;
  font-size: 36px;
  text-align: center;
}

.characters-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  padding: 48px;
}
</style>
