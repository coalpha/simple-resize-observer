/// <reference types="./lib"/>

export default class SimpleResizeObserver {
   #observer: ResizeObserver;
   #fn: SimpleResizeObserverFn;
   #queued = false;
   #entry!: ResizeObserverEntry;
   constructor(el: Element, fn: SimpleResizeObserverFn, box: BoxOptions = "content-box") {
      this.#fn = fn;
      this.#observer = new ResizeObserver(this.resize.bind(this));
      this.#observer.observe(el, { box });
   }

   resize(entries: ResizeObserverEntry[]) {
      this.#entry = entries[0];
      if (!this.#queued) {
         window.requestAnimationFrame(this.dispatch.bind(this));
         this.#queued = true;
      }
   }

   dispatch() {
      this.#fn(this.#entry);
      this.#queued = false;
   }

   disconnect() {
      this.#observer.disconnect();
   }
}
