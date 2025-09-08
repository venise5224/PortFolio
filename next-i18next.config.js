module.exports = {
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
    localePath: path.resolve("./public/language"),
  },
  react: { useSuspense: false }, // Suspense 비활성화
};
