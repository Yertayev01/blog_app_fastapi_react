class EasyFetch {
  constructor() {
    this.default = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    };
  }

  get(url, init = {}) {
    return this.run(url, init);
  }

  post(url, body, init = {}) {
    init = {
      ...this.default,
      method: "POST",
      body: JSON.stringify(body),
    };
    return this.run(url, init);
  }

  put(url, body, init = {}) {
    init = {
      ...this.default,
      method: "PUT",
      body: JSON.stringify(body),
    };
    return this.run(url, init);
  }

  delete(url, body, init = {}) {
    init = {
      ...this.default,
      method: "DELETE",
      body: JSON.stringify(body),
    };
    return this.run(url, init);
  }

  async run(url, init) {
    const res = await fetch(url, init);
    return res.json();
  }
}

const easyFetch = new EasyFetch();

module.exports = { easyFetch };
