import { IncomingMessage, ServerResponse } from 'http';

declare function cors (options?: cors.Options): (req: IncomingMessage, res: ServerResponse, next: (err: Error) => void) => void;

declare namespace cors {
  export interface Config {
    /**
     * Configures the Access-Control-Allow-Origin CORS header.
     */
    origin?: boolean | string | RegExp | Array<string | RegExp> | ((origin: string, cb: (err: Error, allow: boolean) => void) => any);
    /**
     * Configures the Access-Control-Allow-Methods CORS header. Expects a comma-delimited string (ex: 'GET,PUT,POST') or an array (ex: ['GET', 'PUT', 'POST']).
     */
    methods?: string[];
    /**
     * Configures the Access-Control-Allow-Headers CORS header. Expects a comma-delimited string (ex: 'Content-Type,Authorization') or an array (ex: ['Content-Type', 'Authorization']). If not specified, defaults to reflecting the headers specified in the request's Access-Control-Request-Headers header.
     */
    allowedHeaders?: string | string[];
    /**
     * Configures the Access-Control-Expose-Headers CORS header. Expects a comma-delimited string (ex: 'Content-Range,X-Content-Range') or an array (ex: ['Content-Range', 'X-Content-Range']). If not specified, no custom headers are exposed.
     */
    exposedHeaders?: string | string[];
    /**
     * Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted.
     */
    credentials?: boolean;
    /**
     * Configures the Access-Control-Allow-Max-Age CORS header. Set to an integer to pass the header, otherwise it is omitted.
     */
    maxAge?: number;
    /**
     * Pass the CORS preflight response to the next handler.
     */
    preflightContinue?: boolean;
  }

  export type Options = Config | ((req: IncomingMessage, res: ServerResponse) => any);
}

export = cors;