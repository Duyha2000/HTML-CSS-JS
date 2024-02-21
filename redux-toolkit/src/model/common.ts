export interface PaginationParams {
  pageSize: number;
  pageIndex: number;
  pageCount: number;
}
export interface ListResponse<T> {
  data: T[];
  errorMessage: string;
  pageCount: number;
  totalRow: number;
  succeed: boolean;
  pagination: PaginationParams;
}

export interface ResponseMessage<T> {
  data: T;
  errorMessage?: unknown;
  succeed: boolean;
}

export interface ListParams {
  pageIndex: number;
  pageSize: number;
  sort?: string;
  order?: "asc" | "desc";
  [key: string]: unknown;
}

export interface RequestStatus {
  status?: number;
  index: number;
  message?: string;
}
