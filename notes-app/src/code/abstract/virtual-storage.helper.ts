export interface VirtualStorageHelper<T> {
    setData(model: T): boolean;

    getData(): T[];

    remove(model: T);
}
