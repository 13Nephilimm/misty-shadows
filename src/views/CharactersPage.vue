<template>
  <section class="characters-section section">
    <h1 class="game-logo">Misty Shadows</h1>
    <h2 class="characters-heading">Choose Your Character</h2>
    <div class="characters-container">
      <div
        class="card"
        v-for="(character, index) in characters"
        :key="index"
        :class="{ flipped: flippedCards[index] }"
        @click="flipCard(index)"
      >
        <div class="card-front" :class="`card-front-${index + 1}`">
          <div class="image-container">
            <img
              :src="`/assets/characters/character-${index + 1}.jpg`"
              alt="character-image"
            />
          </div>
          <div class="text-box">
            <div class="names-box">
              <p :class="`full-name-${index + 1}`">{{ character.fullName }}</p>
              <h3 :class="`nickname-${index + 1}`">{{ character.nickname }}</h3>
            </div>
            <p :class="`short-story-${index + 1}`">
              {{ character.shortStory }}
            </p>
          </div>
        </div>
        <div class="card-back" :class="`card-back-${index + 1}`">
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
      flippedCards: {},
    };
  },
  methods: {
    flipCard(index) {
      this.flippedCards = {
        ...this.flippedCards,
        [index]: !this.flippedCards[index],
      };
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

.card-front {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}

.image-container {
  width: 300px;
  height: 350px;
  clip-path: polygon(
    2% 2%,
    98% 2%,
    98% 50%,
    98% 98%,
    75% 98%,
    60% 85%,
    2% 85%,
    2% 50%
  );
}

.image-container img {
  width: 100%;
  height: 100%;
  border-radius: 30px;
}

.text-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card-back {
  transform: rotateY(180deg);
}

/* Each Character Front/Back */

.card-front-1 {
  background-color: var(--red);
  color: #fff;
}

.card-back-1 {
  background-color: var(--red);
}

.card-front-2 {
  background-color: var(--purple);
  color: #fff;
}

.card-back-2 {
  background-color: var(--purple);
}

.card-front-3 {
  background-color: var(--blue);
  color: #fff;
}

.card-back-3 {
  background-color: var(--blue);
}

.card-front-4 {
  background-color: var(--yellow);
  color: #fff;
}

.card-back-4 {
  background-color: var(--yellow);
}

/* Each Character Texts */
.nickname-1 {
  position: absolute;
  top: -30%;
  letter-spacing: 3px;
  left: 3%;
  font-size: 24px;
  font-family: var(--accent-font);
  color: #5f2121;
  text-transform: uppercase;
}

.full-name-1 {
  font-weight: 700;
  position: absolute;
  color: #000;
  top: -52%;
  font-size: 20px;
  left: 3%;
}

.short-story-1 {
  padding: 4px;
  margin: 8px;
  color: #290e0e;
  font-weight: 600;
  border: 1px solid #000;
  border-radius: 8px;
}
</style>
