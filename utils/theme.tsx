interface Theme {
    color: {
        background: string,
        primary: string,
        secondary: string,
        font: string,
        fontInverted: string,
        buttonBackgroundDefault: string,
        lightBackground: string
    },
    rebassBreakpoints: {
        main: number[]
    }
}


const theme : Theme = {
    color: {
        background: `hsla(0, 0%, 7%, 1)`,
        primary: `hsla(244, 95%, 83%, 1)`,
        secondary: 'hsla(263, 90%, 62%, 1)',
        font: `hsla(0, 0%, 0%, 1)`,
        fontInverted: `hsla(0, 0%, 100%, 1)`,
        buttonBackgroundDefault: `hsla(180, 9%, 32%, 1)`,
        lightBackground: `hsla(0, 0%, 95%, 1)`
    },
    rebassBreakpoints: {
        main: [1098]
    },
}

export default theme;