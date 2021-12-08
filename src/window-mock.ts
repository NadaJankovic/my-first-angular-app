
function mock() {
  let storage = {} as Storage;
  return {
    length : storage.length,
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string | number, value: string) => (storage[key]= value || ''),
    removeItem: (key: string | number) => delete storage[key],
    clear: () => (storage = {} as Storage)
  };
}
Object.defineProperty(window, 'localStorage', { value: mock() });

// Used to fix the ReferenceError: CSS is not defined ERROR
Object.defineProperty(window, 'CSS', { value: mock() });
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
// mock history object 
function mockHystory() {
let history = {} as History;
    return {
      //back: ():void,
     // forward(): void;
     // go(delta?: number): void;
     // pushState(data: any, unused: string, url?: string | URL | null): void;
      replaceState : (data: any, unused: string, url?: string | URL | null): void => (data),
    }
}
Object.defineProperty(window, 'history', {value: mockHystory()})