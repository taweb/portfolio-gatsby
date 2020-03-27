const isHomepage = (string) => {
    return string === '/'
}

const getPage = (uri) => {
    if (uri === '/') return '/';
    return uri.substr(1);
}

export { isHomepage, getPage };