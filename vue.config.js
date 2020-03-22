// vue.config.js

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/musicr/'
        : '/',

    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        },

        externals: {
            vue: 'Vue',
            'vue-lazyload': 'VueLazyload',
            'vue-router':'VueRouter',
        }

    },
}