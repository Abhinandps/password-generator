export const passwordStatus = [
    {
        minLength: 4,
        maxLength: 7,
        text: "Oh no, it’s a bit weak . Make it stronger by adding length, special characters & upper­case letters.",
        strongWords: ["weak"],
        color: "red",
    },
    {
        minLength: 8,
        maxLength: 11,
        text: "Medium , but could be stronger. Try adding length & special characters.",
        strongWords: ["Medium"],
        color: "orange",
    },
    {
        minLength: 12,
        maxLength: 15,
        text: "This is STRONG!  Make it even stronger with more length & complexity.",
        strongWords: ["STRONG!"],
        color: "green",
    },
    {
        minLength: 16,
        maxLength: 20,
        text: "SUPER  STRONG!  Nobody’s cracking this pass­word anytime soon.",
        strongWords: ["SUPER", "STRONG!"],
        color: "green",
    },
];