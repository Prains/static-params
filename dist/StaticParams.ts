type QueryList = {
  [key: string]: string;
};

type QueryParams<T> = {
  [K in keyof T]?: T[K];
};

export class StaticParams<T extends QueryList> {
  private queryList: T;

  constructor(queryList: T) {
    this.queryList = queryList;
  }

  public getQueryList(): T {
    return this.queryList;
  }

  public setQueryList(queryList: T): void {
    this.queryList = queryList;
  }

  public constructQueryParams(queryParams: QueryParams<T>): string {
    return Object.keys(this.queryList)
      .map((key) => {
        const keyValue = key as keyof T; // Типизируем ключ, чтобы TypeScript понимал его как ключ T
        if (queryParams[keyValue] !== undefined) {
          // Кодируем ключ и значение для безопасной вставки в URL
          return `${encodeURIComponent(key)}=${encodeURIComponent(
            queryParams[keyValue] as string
          )}`;
        } else {
          // Кодируем ключ и значение по умолчанию для безопасной вставки в URL
          return `${encodeURIComponent(key)}=${encodeURIComponent(
            this.queryList[keyValue] as string
          )}`;
        }
      })
      .join("&");
  }
}
