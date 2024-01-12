/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

const { withFrameworkConfig } = require("./src/framework/common/config.js");

module.exports = withFrameworkConfig({
    i18n: { locales: ["en-US", "ru"], defaultLocale: "en-US" },
});

// module.exports = nextConfig;
