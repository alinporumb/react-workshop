const base_url = 'http://localhost:8000/products';

export const getAll = () => {
  return fetch(base_url).then(res => res.json());
}

export const get = (id) => {
  return fetch(`${base_url}/${id}`).then(res => res.json());
}

export const save = (product) => {
  if (product.id) {
    return fetch(`${base_url}/${product.id}`, {
      method : 'PUT',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(product)
    }).then(res => res.json())
  } else {
    return fetch(base_url, {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(product)
    }).then(res => res.json())
  }
}