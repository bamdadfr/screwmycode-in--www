/**
 * Replace Next.js route with new route
 * Bypassing Next.js routing system
 * Avoiding re-rendering of components
 *
 * @see https://github.com/vercel/next.js/discussions/18072
 * @param {string} parameter - Route parameter
 * @param {string} value - New parameter value
 * @param {undefined|string} [title=false] - New page title
 */
export function replaceNextRoute (parameter, value, title = undefined) {
  if (typeof parameter !== 'string') {
    throw new Error ('parameter not a string');
  }

  if (typeof value !== 'string') {
    throw new Error ('value not a string');
  }

  if (typeof title !== 'undefined') {
    document.title = title;
  }

  const { as, url } = window.history.state;
  const args = as.split ('/');
  const id = new RegExp (`^(.*)(\\[${parameter}\\])(.*)$`)
    .exec (url)
    .slice (1)[0]
    .split ('/')
    .length - 1;

  args[id] = value;

  const newAs = args.join ('/');

  const newUrl = url.replace (
    new RegExp (`${parameter}=.*?(?=&|$)`),
    `${parameter}=${value}`,
  );

  window.history.replaceState (
    { ...window.history.state, as: newAs, url: newUrl },
    '',
    newAs,
  );
}
