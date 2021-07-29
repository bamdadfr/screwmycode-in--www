/**
 * @description replace route using window.history API instead of next/router to prevent re-renders
 * @see https://github.com/vercel/next.js/discussions/18072
 * @param {string} parameter url parameter to change
 * @param {string} value value to apply
 * @param {undefined|string} [title=false] optional document.title
 */
export function replaceNextRoute (parameter, value, title = undefined) {

    if (typeof parameter !== 'string') throw new Error ('parameter not a string')

    if (typeof value !== 'string') throw new Error ('value not a string')

    if (typeof title !== 'undefined') document.title = title

    const { as, url } = window.history.state
    const args = as.split ('/')
    const id = new RegExp (`^(.*)(\\[${parameter}\\])(.*)$`).exec (url).slice (1)[0].split ('/').length - 1

    args[id] = value

    const newAs = args.join ('/')

    const newUrl = url.replace (
        new RegExp (`${parameter}=.*?(?=&|$)`),
        `${parameter}=${value}`,
    )

    window.history.replaceState (
        {
            ...window.history.state,
            'as': newAs,
            'url': newUrl,
        },
        '',
        newAs,
    )

}
