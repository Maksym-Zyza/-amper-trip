const BASE_URL = 'https://663f5fa6e3a7c3218a4cec8c.mockapi.io/data';

export const fetchData = async (path, method, body) => {
  const headers = { 'Content-type': 'application/json' };
  const init = { headers, method, body };
  const resp = await fetch(path, init);
  if (!resp.ok) {
    throw new Error(`Error: status: ${resp.status}, ${resp.statusText}`);
  }
  return resp.json();
};

export const fetchApi = {
  async getData(dataParams) {
    const params = new URLSearchParams(dataParams);
    const url = `${BASE_URL}/?${params}`;
    return await fetchData(url);
  },
  async createContact(dataBody) {
    const method = 'POST';
    const url = `${BASE_URL}`;
    const body = JSON.stringify(dataBody);
    return await fetchData(url, method, body);
  },
  async updateData(id, dataBody) {
    const method = 'PUT';
    const url = `${BASE_URL}/${id}`;
    const body = JSON.stringify(dataBody);
    return await fetchData(url, method, body);
  },
  async deleteData(id) {
    const method = 'DELETE';
    const url = `${BASE_URL}/${id}`;
    return await fetchData(url, method);
  },
};
