module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,ejs}'],
    theme: {
        extend: {
            colors: {
                'dm-white': '#FAF9EF',
                'dm-red': '#D62828',
                'dm-orange': '#F77F00',
                'dm-yellow': '#ECAD2E',
                'dm-light-blue': '#0fa9ec',
                'dm-blue': '#0b94dd',
                'dm-dark-gray': '#1b1b1b',
                'dm-light-gray': '#a3a3a3',
                'discord-purple': '#5d3fd3',
            },
            fontFamily: {
                display: ['Karantina'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    important: true,
};
