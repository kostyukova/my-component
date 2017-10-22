/**
 * SCAPE REST API
 * SCAPE REST API for Authentication, User and Group Management
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UsersApi {

    protected basePath = 'http://localhost:8180/api/v1';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * 
     * @summary Create User
     * @param body 
     */
    public createUser(body?: models.User, extraHttpRequestParams?: any): Observable<models.User> {
        return this.createUserWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Delete User
     * @param login 
     */
    public deleteUser(login: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteUserWithHttpInfo(login, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Get User
     * @param login 
     */
    public getUser(login: string, extraHttpRequestParams?: any): Observable<models.User> {
        return this.getUserWithHttpInfo(login, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary List User Groups
     * @param login 
     */
    public listUserGroups(login: string, extraHttpRequestParams?: any): Observable<Array<models.Group>> {
        return this.listUserGroupsWithHttpInfo(login, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary List Users
     * @param limit The limit parameter controls the maximum number of items that may be returned for a single request. This parameter can be thought of as the page size. If no limit is specified, the system defaults to a limit of 15 results per request. The maximum valid limit value is 100.
     * @param offset The offset parameter controls the starting point within the collection of resource results. For example, if you have a collection of 15 items to be retrieved from a resource and you specify limit&#x3D;5, you can retrieve the entire set of results in 3 successive requests by varying the offset value: offset&#x3D;0, offset&#x3D;5, and offset&#x3D;10. Note that the first item in the collection is retrieved by setting a zero offset.
     * @param search The search parameter is a query string for simple search.
     */
    public listUsers(limit?: number, offset?: number, search?: string, extraHttpRequestParams?: any): Observable<models.InlineResponse200> {
        return this.listUsersWithHttpInfo(limit, offset, search, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Update User
     * @param login 
     * @param body 
     */
    public updateUser(login: string, body?: models.User, extraHttpRequestParams?: any): Observable<models.User> {
        return this.updateUserWithHttpInfo(login, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Create User
     * 
     * @param body 
     */
    public createUserWithHttpInfo(body?: models.User, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (X-Auth-Token) required
        if (this.configuration.apiKey) {
            headers.set('X-Auth-Token', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete User
     * 
     * @param login 
     */
    public deleteUserWithHttpInfo(login: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${login}'
                    .replace('${' + 'login' + '}', String(login));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'login' is not null or undefined
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling deleteUser.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (X-Auth-Token) required
        if (this.configuration.apiKey) {
            headers.set('X-Auth-Token', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get User
     * 
     * @param login 
     */
    public getUserWithHttpInfo(login: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${login}'
                    .replace('${' + 'login' + '}', String(login));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'login' is not null or undefined
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling getUser.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (X-Auth-Token) required
        if (this.configuration.apiKey) {
            headers.set('X-Auth-Token', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * List User Groups
     * 
     * @param login 
     */
    public listUserGroupsWithHttpInfo(login: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${login}/groups'
                    .replace('${' + 'login' + '}', String(login));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'login' is not null or undefined
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling listUserGroups.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (X-Auth-Token) required
        if (this.configuration.apiKey) {
            headers.set('X-Auth-Token', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * List Users
     * 
     * @param limit The limit parameter controls the maximum number of items that may be returned for a single request. This parameter can be thought of as the page size. If no limit is specified, the system defaults to a limit of 15 results per request. The maximum valid limit value is 100.
     * @param offset The offset parameter controls the starting point within the collection of resource results. For example, if you have a collection of 15 items to be retrieved from a resource and you specify limit&#x3D;5, you can retrieve the entire set of results in 3 successive requests by varying the offset value: offset&#x3D;0, offset&#x3D;5, and offset&#x3D;10. Note that the first item in the collection is retrieved by setting a zero offset.
     * @param search The search parameter is a query string for simple search.
     */
    public listUsersWithHttpInfo(limit?: number, offset?: number, search?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (limit !== undefined) {
            queryParameters.set('limit', <any>limit);
        }

        if (offset !== undefined) {
            queryParameters.set('offset', <any>offset);
        }

        if (search !== undefined) {
            queryParameters.set('search', <any>search);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (X-Auth-Token) required
        if (this.configuration.apiKey) {
            headers.set('X-Auth-Token', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Update User
     * 
     * @param login 
     * @param body 
     */
    public updateUserWithHttpInfo(login: string, body?: models.User, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${login}'
                    .replace('${' + 'login' + '}', String(login));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'login' is not null or undefined
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling updateUser.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (X-Auth-Token) required
        if (this.configuration.apiKey) {
            headers.set('X-Auth-Token', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
