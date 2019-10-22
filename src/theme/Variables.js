const rawColors = {
    shuttleGrey: '#576270',
    slateGrey: '#aebed1'
}

const colors = {
    white: '#f7f7f7',
    black: '#222',
    // grey: '#c4c4c4',
    grey: '#aebed1',
    red: '#fd6b6a',
    primaryBlue: `${rawColors.shuttleGrey}`,
    secondaryBlue: `${rawColors.slateGrey}`
}

const breakPoints = {
    xldesktop: 'min-width: 1024px',
    desktop: 'min-width: 768px',
    tablet: 'min-width: 660px',
    mobile: 'min-width: 440px'
}

const fontSizes = {
    xlarge: '3rem',
    large: '2.5rem',
    medium: '1.6rem',
    normal: '1.4rem'
}

const linkColors = {
    repo: '#e7503a',
    app: '#383535'
}

const layout = {
    sidebarWidth: '230px',
    headerHeight: '60px'
}

export { colors, breakPoints, layout, fontSizes, linkColors };