const BASE_URL = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_BASE_URL_LOCAL
    : process.env.REACT_APP_BASE_URL

module.exports = {
    BASE_URL
}