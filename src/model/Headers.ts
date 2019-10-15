import * as http from 'http';

export const textHeader: http.OutgoingHttpHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Content-Type': 'text/plain'
};

export const jsonHeader: http.OutgoingHttpHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Content-Type': 'application/json'
};

export enum statusCodes {
    OK = 200,
    NOT_FOUND = 404
}
