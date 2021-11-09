class EasyFetch {
  constructor() {
    this.urlBase = process.env.REACT_APP_API_BASE_URL;
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

  post(url, body, init = null) {
    if (!init) {
      init = {
        ...this.default,
        method: "POST",
        body: JSON.stringify(body),
      };
    } else {
      init = {
        ...init,
        body,
      };
    }

    return this.run(url, init);
  }

  put(url, body, init = null) {
    if (!init) {
      init = {
        ...this.default,
        method: "PUT",
        body: JSON.stringify(body),
      };
    } else {
      init = {
        ...init,
        body,
      };
    }
    return this.run(url, init);
  }

  delete(url, body, init = {}) {
    if (!init) {
      init = {
        ...this.default,
        method: "DELETE",
        body: JSON.stringify(body),
      };
    } else {
      init = {
        ...init,
        body,
      };
    }

    return this.run(url, init);
  }

  run(url, init) {
    const f = fetch(this.urlBase + url, init);
    return f.then((res) => {
      if (!res.ok)
        return res.json().then((e) => {
          throw e;
        });
      return res.json();
    });
  }
}

export const easyFetch = new EasyFetch();
