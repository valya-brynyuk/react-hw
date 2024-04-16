export async function getPosts(abortController) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    abortController: abortController.signal
  })
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json()
}