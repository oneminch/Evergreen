export default defineAppConfig({
  docus: {
    title: "Dawit's Second Brain",
    description: "My Second Brain 🧠.",
    image: "https://oneminch.dev/apple-touch-icon.png",
    aside: {
      level: 1,
      collapsed: true
    },
    main: {
      padded: true,
      fluid: false
    },
    header: {
      logo: true,
      title: "Dawit's Second Brain 🧠",
      exclude: ["remote"],
      fluid: false
    },
    footer: {
      credits: false
    }
  }
});
