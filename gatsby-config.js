import rupture from 'rupture';

const siteConfig = {
    siteMetadata: {
        title: 'emojit',
        description: 'Adivina películas, libros y más, solo con 🌵💻👽',
        author: '@nikodermus',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'emojit.fun',
                short_name: 'emojit',
                start_url: '/',
                background_color: '#eb2764',
                theme_color: '#eb2764',
                display: 'minimal-ui',
                icon: 'src/images/ba-favicon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-stylus',
            options: {
                use: [rupture()],
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-62236338-3',
            },
        },
    ],
};

export default siteConfig;
