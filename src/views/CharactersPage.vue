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
          <span
            class="mdi mdi-progress-question"
            :class="`question-${index + 1}`"
          ></span>
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
          <span v-if="index === 0" class="mdi mdi-pistol"></span>
          <span v-if="index === 1" class="mdi mdi-flower-pollen"></span>
          <span v-if="index === 2" class="mdi mdi-shield"></span>
          <span v-if="index === 3" class="mdi mdi-incognito"></span>
          <div class="line-horizontal"></div>
          <div class="line-vertical"></div>
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

.game-logo::after {
  content: "";
  width: 500px;
  left: 50%;
  display: block;
  position: absolute;
  transform: translateX(-50%);
  bottom: 50%;
  background: radial-gradient(
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.8)
  );
  border-radius: 50%;
  box-shadow: 0 0 50px 25px rgba(255, 255, 255, 0.7);
  z-index: -1;
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
  transform: rotateY(180deg);
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
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Each Character Front/Back */

.card-front-1 {
  background-color: var(--red);
  color: #fff;
  border: 3px solid #000;
}

.card-back-1 {
  background-color: var(--red);
  border: 5px solid #000;
}

.card-front-2 {
  background-color: var(--purple);
  color: #fff;
  border: 3px solid #491161;
}

.card-back-2 {
  background-color: var(--purple);
  border: 3px solid #491161;
}

.card-front-3 {
  background-color: var(--blue);
  color: #fff;
  border: 3px solid #031e44;
}

.card-back-3 {
  background-color: var(--blue);
  border: 3px solid #031e44;
}

.card-front-4 {
  background-color: var(--yellow);
  color: #fff;
  border: solid 3px #554001;
}

.card-back-4 {
  background-color: var(--yellow);
  border: solid 3px #554001;
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

.nickname-2 {
  position: absolute;
  top: -30%;
  letter-spacing: 5px;
  left: 3%;
  font-size: 24px;
  font-family: var(--accent-font);
  color: #491161;
  text-transform: uppercase;
}

.full-name-2 {
  font-weight: 700;
  position: absolute;
  color: #fff;
  top: -52%;
  font-size: 20px;
  left: 3%;
  letter-spacing: 2px;
}

.short-story-2 {
  padding: 4px;
  margin: 8px;
  color: #ecc0ff;
  font-weight: 600;
  border: 1px solid #000;
  border-radius: 8px;
  height: 75px;
}

.nickname-3 {
  position: absolute;
  top: -30%;
  letter-spacing: 7px;
  left: 3%;
  font-size: 24px;
  font-family: var(--accent-font);
  color: #031e44;
  text-transform: uppercase;
}

.full-name-3 {
  font-weight: 700;
  position: absolute;
  color: #fff;
  top: -52%;
  font-size: 20px;
  left: 3%;
  letter-spacing: 2px;
}

.short-story-3 {
  padding: 4px;
  margin: 8px;
  color: #8abbff;
  font-weight: 600;
  border: 1px solid #000;
  border-radius: 8px;
  height: 75px;
}

.nickname-4 {
  position: absolute;
  top: -30%;
  letter-spacing: 0px;
  left: 3%;
  font-size: 15px;
  font-family: var(--accent-font);
  color: #554001;
  text-transform: uppercase;
}

.full-name-4 {
  font-weight: 700;
  position: absolute;
  color: #000;
  top: -52%;
  font-size: 20px;
  left: 3%;
  letter-spacing: 2px;
}

.short-story-4 {
  padding: 4px;
  margin: 8px;
  color: #302400;
  font-weight: 600;
  border: 1px solid #000;
  border-radius: 8px;
  height: 75px;
}

.mdi-pistol,
.mdi-flower-pollen,
.mdi-shield,
.mdi-incognito {
  font-size: 80px;
  border-radius: 50%;
  padding: 16px 20px;
}

.mdi-pistol {
  color: #5f2121;
  border: 5px solid #5f2121;
  background-color: var(--red);
}

.mdi-flower-pollen {
  color: #491161;
  border: 5px solid #491161;
  background-color: var(--purple);
}

.mdi-shield {
  color: #031e44;
  border: 5px solid #031e44;
  background-color: var(--blue);
}

.mdi-incognito {
  color: #554001;
  border: 5px solid #554001;
  background-color: var(--yellow);
}

.line-horizontal {
  position: absolute;
  height: 5px;
  width: 295px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #000;
  z-index: -1;
}

.line-vertical {
  position: absolute;
  height: 395px;
  width: 5px;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background-color: #000;
  z-index: -1;
}

.mdi-progress-question {
  position: absolute;
  right: 3%;
  top: 2%;
  font-size: 36px;
  font-weight: 700;
  z-index: 9;
  border-radius: 50%;
  padding: 0 4px;
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.7);
}

.question-1 {
  background-color: var(--red);
  color: #000;
}

.question-2 {
  background-color: var(--purple);
}

.question-3 {
  background-color: var(--blue);
}

.question-4 {
  background-color: var(--yellow);
}
</style>
