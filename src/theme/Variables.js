const rawColors = {
    shuttleGrey: '#576270',
    slateGrey: '#aebed1'
}

const colors = {
    white: '#f7f7f7',
    black: '#222',
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
    title: '4.5rem',
    xlarge: '3.2rem',
    large: '2.4rem',
    medium: '1.8rem',
    normal: '1.6rem'
}

const linkColors = {
    repo: '#e7503a',
    app: '#383535'
}

const layout = {
    sidebarWidth: '240px',
    headerHeight: '60px',
    footerHeight: '85px'
}

export { colors, breakPoints, layout, fontSizes, linkColors };