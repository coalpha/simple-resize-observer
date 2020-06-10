/// <reference types="../vendor/ResizeObserver"/>

type SimpleResizeObserverFn = (entry: ResizeObserverEntry) => void;
type BoxOptions = ResizeObserverObserveOptions["box"];
declare class SimpleResizeObserver {
    constructor(el: Element, fn: SimpleResizeObserverFn, box?: BoxOptions);
    resize(entries: ResizeObserverEntry[]): void;
    dispatch(): void;
    disconnect(): void;
}
