import { Observable } from "rxjs";

export interface Crud<T>{
    create(item: T): Observable<T>;
    update(item: T): Observable<T>;
    delete(id: number): Observable<void>;
    getAll(): Observable<T[]>;
    getById(id: number): Observable<T>;
}