<template>
  <section class="characters-section section">
    <h1 class="game-logo">Misty Shadows</h1>
    <h2 class="characters-heading">Choose Your Character</h2>
    <div class="characters-container">
      <div
        class="card"
        v-for="k in characters"
        :class="{ flipped: isFlipped }"
        @click="flipCard"
      >
        <div class="card-front">
          <h2>Front Side</h2>
          <p>This is the front of the card.</p>
        </div>
        <div class="card-back">
          <h2>Back Side</h2>
          <p>This is the back of the card.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      username: this.$store.state.username,
      characters: this.$store.state.characters,
      isFlipped: false,
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
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
  perspective: 1000px;
}

.card {
  width: 300px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 10px;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card-front {
  background-color: #ffcc00;
  color: #fff;
}

.card-back {
  background-color: #0099cc;
  color: #fff;
  transform: rotateY(180deg);
}
</style>
