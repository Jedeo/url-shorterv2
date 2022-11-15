export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = async (url, title) => {
  const add = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ long_url: url, title: title })
  }

  const resp = await fetch('http://localhost:3001/api/v1/urls', add) 
  const data = await resp.json()
  return data
}
