export async function queryTokenApi(token: string) {
  return await fetch('api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(token),
  });
}
