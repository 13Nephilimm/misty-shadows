<template>
  <section class="characters-section section">
    <h1 class="game-logo">Misty Shadows</h1>
    <h2 class="characters-heading">Choose Your Character</h2>
    <div class="characters-container">
      <div class="card">
        <div class="wrapper">
          <img
            src="/assets/characters/character-1-background.jpg"
            alt="character"
            class="cover-img"
          />
        </div>
        <h3 class="title">Jax</h3>
        <img
          src="/assets/characters/character-1-hover.png"
          alt="character"
          class="character"
        />
      </div>

      <div class="card">
        <div class="wrapper">
          <img
            src="/assets/characters/character-2-background.jpg"
            alt="character"
            class="cover-img"
          />
        </div>
        <h3 class="title">Leo</h3>
        <img
          src="/assets/characters/character-2-hover.png"
          alt="character"
          class="character"
        />
      </div>

      <div class="card">
        <div class="wrapper">
          <img
            src="/assets/characters/character-3-background.jpg"
            alt="character"
            class="cover-img"
          />
        </div>
        <h3 class="title">Claire</h3>
        <img
          src="/assets/characters/character-3-hover.png"
          alt="character"
          class="character"
        />
      </div>

      <div class="card">
        <div class="wrapper">
          <img
            src="/assets/characters/character-4-background.jpg"
            alt="character"
            class="cover-img"
          />
        </div>
        <h3 class="title">Mr Foxy</h3>
        <img
          src="/assets/characters/character-4-hover.png"
          alt="character"
          class="character"
        />
      </div>
    </div>
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

.card {
  width: 200px;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 36px;
  perspective: 2500px;
  margin: 0 50px;
  cursor: pointer;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper {
  transition: all 0.5s;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.card:hover .wrapper {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}

.wrapper::before,
.wrapper::after {
  content: "";
  opacity: 0;
  width: 100%;
  height: 80px;
  transition: all 0.5s;
  position: absolute;
  left: 0;
}

.wrapper::before {
  top: 0;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 46%,
    rgba(12, 13, 19 0.5) 68%,
    rgba(12, 13, 19 0.5) 97%
  );
}

.wrapper::after {
  bottom: 0;
  opacity: 1;
  background-image: linear-gradient(
    to top,
    transparent 46%,
    rgba(12, 13, 19 0.5) 68%,
    rgba(12, 13, 19 0.5) 97%
  );
}

.card:hover .wrapper::before,
.wrapper::after {
  opacity: 1;
}

.card:hover .wrapper::after {
  height: 120px;
}

.title {
  font-family: var(--accent-font);
  font-size: 28px;
  text-transform: uppercase;
  color: var(--gold);
  text-align: center;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
  width: 100%;
  transition: transform 0.5s;
  margin-bottom: 10px;
  z-index: 9;
}

.card:hover .title {
  transform: translate3d(0%, -50px, 100px);
}

.character {
  width: 100%;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  z-index: -1;
}

.card:hover .character {
  opacity: 1;
  transform: translate3d(0%, -30%, 100px);
}
</style>
