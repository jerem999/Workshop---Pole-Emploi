const toast = (text, params) => {
    const defaultParams = {
        classes: 'rounded',
        activationPercent: 0.4,
        displayLength: 3000
    }
    const obj = Object.assign(defaultParams, { html: text }, params)
    window.M.toast(obj)
}

const toastError = (text, params = { classes: 'rounded error' }) => {
    toast(text, params)
}

const getJson = function (response) {
    return response.json()
}

export { toast, toastError, getJson }