type urlType = string;
type bodyType = any;
type initType =
  | {
      method?: string;
      headers?: any;
      body?: string | undefined;
    }
  | undefined;

class EasyFetch {
  readonly urlBase: string | undefined;
  readonly default: initType;

  constructor() {
    this.urlBase = "http://localhost:8000";
    this.default = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: undefined,
    };
  }

  get(url: urlType, init: initType = undefined) {
    return this.run(url, init);
  }

  post(url: urlType, body: bodyType, init: initType = undefined) {
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

  put(url: urlType, body: bodyType, init = {}) {
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

  delete(url: urlType, body: bodyType, init = {}) {
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

  run(url: urlType, init: initType = undefined) {
    if (!init) init = this.default;
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
