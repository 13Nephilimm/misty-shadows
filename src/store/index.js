import { createStore } from "vuex";

export default createStore({
  state: {
    username: localStorage.getItem("username") || "",
    characters: [
      {
        id: 1,
        fullName: "Chris Johnson",
        nickname: "The Reaper",
        shortStory: "",
        fullStory: "",
      },
      {
        id: 2,
        fullName: "Nyx Vega",
        nickname: "Shade",
        shortStory:
          "Silent as the night, deadly as her name—Shade strikes before you even sense danger.",
        fullStory:
          "Born and raised in the neon-lit streets of the underground city, Nyx 'Shade' Vega learned early how to survive. A master of deception and deadly precision, she works as a mercenary for the highest bidder. No one knows her true allegiance, but whispers say she once took down an entire crime syndicate alone. Whether she’s wielding her twin daggers or manipulating minds, she always gets what she wants—no matter the cost.",
      },
      {
        id: 3,
        fullName: "Unknown",
        nickname: "Phantom",
        shortStory:
          "Neither here nor there, neither man nor woman—Phantom is the mystery you’ll never solve.",
        fullStory:
          "No one knows where Phantom came from, or even what they are. Some say they're a rogue AI, others claim they’re a supernatural entity. Dressed in a seamless fusion of high-tech armor and ancient cloth, Phantom's presence is unsettling, their voice shifting between tones, making it impossible to pin down their identity. With abilities that blur the line between magic and technology, Phantom exists in the shadows, striking when least expected and vanishing before anyone can react.",
      },
      {
        id: 4,
        fullName: "Vex",
        nickname: "The Shadowtail Fox",
        shortStory:
          "A thief, a spy, a shadow in the night—Vex never leaves without taking something with them.",
        fullStory:
          "In the lawless corners of the world, where only the clever survive, Vex reigns as the ultimate trickster. A sleek, cyber-enhanced fox with an intelligence far beyond normal animals, Vex was once an experiment in genetic augmentation. Escaping captivity, they became a legend among thieves, infiltrators, and spies. No lock can keep them out, no trap can hold them, and no one truly knows where their loyalty lies. With a smirk in their amber eyes and a tail that flickers like a phantom in the dark, Vex always stays one step ahead of fate.",
      },
    ],
    activeCharacter: [],
  },
  getters: {
    getUsername: (state) => state.username,
  },
  mutations: {
    setUsername(state, data) {
      state.username = data;
      localStorage.setItem("username", data);
    },
  },
  actions: {},
  modules: {},
});
