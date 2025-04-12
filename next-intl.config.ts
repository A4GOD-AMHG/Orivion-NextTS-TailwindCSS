import path from 'path';
import createConfig from 'next-intl/plugin';

module.exports = createConfig(path.join(__dirname, 'locales', '[lang].json'));

// import createConfig from 'next-intl/plugin';

// module.exports = createConfig('./locales/[lang].json');