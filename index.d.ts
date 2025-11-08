declare module '@apiverve/marineweather' {
  export interface marineweatherOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface marineweatherResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class marineweatherWrapper {
    constructor(options: marineweatherOptions);

    execute(callback: (error: any, data: marineweatherResponse | null) => void): Promise<marineweatherResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: marineweatherResponse | null) => void): Promise<marineweatherResponse>;
    execute(query?: Record<string, any>): Promise<marineweatherResponse>;
  }
}
