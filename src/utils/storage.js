class Storage {
  constructor(type = 'localStorage') {
    this.storages = {
      localStorage: window.localStorage,
      sessionStorage: window.sessionStorage,
    };

    if (!this.storages[type]) {
      throw new Error(`Storage type ${type} does not exist.`);
    }

    this.type = type;
    this.storage = this.storages[type];
    this.proxy = null;
    this.namespace = null
  }

  // Initializes a namespaced storage within localStorage or sessionStorage.
  initNamespaceStorage(namespace) {
    const storage = this.storage;
    const namespaceKey = `${namespace}_ns`;
    this.namespace = namespace
    if (!storage.getItem(namespaceKey)) {
      storage.setItem(namespaceKey, JSON.stringify({}));
    }
    this.proxy = new Proxy({}, {
      get: (target, prop) => {
        const data = JSON.parse(storage.getItem(namespaceKey));
        return data[prop];
      },
      set: (target, prop, value) => {
        let data = JSON.parse(storage.getItem(namespaceKey));
        if (!data) {
          data = {};
        }
        data[prop] = value;
        storage.setItem(namespaceKey, JSON.stringify(data));
        return true;
      },
      deleteProperty: (target, prop) => {
        let data = JSON.parse(storage.getItem(namespaceKey));
        if (!data) {
          data = {};
        }
        delete data[prop];
        storage.setItem(namespaceKey, JSON.stringify(data));
        return true;
      },
    });
  }
  getNamespace() {
    return this.namespace
  }

  // Returns all namespaces currently used.
  namespaceStorages() {
    const namespaces = {};
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      if (key.endsWith('_ns')) {
        namespaces[key.slice(0, -3)] = this.type;
      }
    }
    return namespaces;
  }

  // General get method for both localStorage and sessionStorage.
  get(key) {
    if (!this.proxy) {
      throw new Error('No namespace initialized.');
    }
    return this.proxy[key]
  }

  // General set method for both localStorage and sessionStorage.
  set(key, value) {
    if (!this.proxy) {
      throw new Error('No namespace initialized.');
    }
    this.proxy[key] = value
  }

  keys() {
    if (!this.proxy) {
      throw new Error('No namespace initialized.');
    }
    const namespaceKey = `${this.namespace}_ns`;
    const data = JSON.parse(this.storage.getItem(namespaceKey));
    if (!data) {
      return [];
    }
    return Object.keys(data);
  }

  // General remove method for both localStorage and sessionStorage.
  remove(key) {
    if (!this.proxy) {
      throw new Error('No namespace initialized.');
    }
    delete this.proxy[key];
  }

  // Clear the current namespace.
  clear() {
    if (!this.proxy) {
      throw new Error('No namespace initialized.');
    }
    const namespaceKey = `${this.namespace}_ns`;
    this.storage.removeItem(namespaceKey);
  }
}

export default Storage;