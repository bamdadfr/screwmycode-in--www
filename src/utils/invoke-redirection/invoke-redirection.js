/**
 * @returns {object} - Next.js redirect object
 */
export function invokeRedirection() {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}
