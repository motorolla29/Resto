export default class RestoService {
  _apiBase = 'https://vercel-json-server-m29.vercel.app';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getMenuItems() {
    return await this.getResource('/menu/');
  }
}
