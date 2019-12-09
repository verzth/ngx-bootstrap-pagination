import { EventEmitter, OnInit } from '@angular/core';
import Pagination from './bs-ngx-pagination.interface';
export declare class BsNgxPaginationComponent implements OnInit {
    pageChange: EventEmitter<number>;
    perPageChange: EventEmitter<number>;
    data: Pagination;
    constructor();
    ngOnInit(): void;
    pageChanged(page: number): void;
    perPageChanged(count: number): void;
    inputPageChanged(e: any): void;
}
