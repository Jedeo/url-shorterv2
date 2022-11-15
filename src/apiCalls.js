const getCheckFetch = async(resp) => {
  try{
    if(!resp.ok){
      throw new Error("Oops something went wrong")
    }
    const data = await resp.json()
    return data

  }catch(err){
    return err

  }
}

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
  getCheckFetch(resp)
}

export const deletePost = async(id) =>{
  const remove = {
    method: 'DELETE',
  }

  const resp = await fetch(`http://localhost:3001/api/v1/urls/${id}`, remove) 
  getCheckFetch(resp)

}