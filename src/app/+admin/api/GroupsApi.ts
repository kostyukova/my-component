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
export class GroupsApi {

    protected basePath = 'http://localhost:4010/api/v1';
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
     * @summary Create Group
     * @param body 
     */
    public createGroup(body?: models.Group, extraHttpRequestParams?: any): Observable<models.Group> {
        return this.createGroupWithHttpInfo(body, extraHttpRequestParams)
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
     * @summary Delete Group
     * @param name 
     */
    public deleteGroup(name: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteGroupWithHttpInfo(name, extraHttpRequestParams)
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
     * @summary Get Group
     * @param name 
     */
    public getGroup(name: string, extraHttpRequestParams?: any): Observable<models.Group> {
        return this.getGroupWithHttpInfo(name, extraHttpRequestParams)
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
     * @summary List Groups
     * @param limit The limit parameter controls the maximum number of items that may be returned for a single request. This parameter can be thought of as the page size. If no limit is specified, the system defaults to a limit of 15 results per request. The maximum valid limit value is 100.
     * @param offset The offset parameter controls the starting point within the collection of resource results. For example, if you have a collection of 15 items to be retrieved from a resource and you specify limit&#x3D;5, you can retrieve the entire set of results in 3 successive requests by varying the offset value: offset&#x3D;0, offset&#x3D;5, and offset&#x3D;10. Note that the first item in the collection is retrieved by setting a zero offset.
     * @param search The search parameter is a query string for simple search.
     */
    public listGroups(limit?: number, offset?: number, search?: string, extraHttpRequestParams?: any): Observable<models.InlineResponse200> {
        return this.listGroupsWithHttpInfo(limit, offset, search, extraHttpRequestParams)
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
     * @summary Update Group
     * @param name 
     * @param body 
     */
    public updateGroup(name: string, body?: models.Group, extraHttpRequestParams?: any): Observable<models.Group> {
        return this.updateGroupWithHttpInfo(name, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Create Group
     * 
     * @param body 
     */
    public createGroupWithHttpInfo(body?: models.Group, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/groups';

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
     * Delete Group
     * 
     * @param name 
     */
    public deleteGroupWithHttpInfo(name: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/groups/${name}'
                    .replace('${' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteGroup.');
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
     * Get Group
     * 
     * @param name 
     */
    public getGroupWithHttpInfo(name: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/groups/${name}'
                    .replace('${' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getGroup.');
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
     * List Groups
     * 
     * @param limit The limit parameter controls the maximum number of items that may be returned for a single request. This parameter can be thought of as the page size. If no limit is specified, the system defaults to a limit of 15 results per request. The maximum valid limit value is 100.
     * @param offset The offset parameter controls the starting point within the collection of resource results. For example, if you have a collection of 15 items to be retrieved from a resource and you specify limit&#x3D;5, you can retrieve the entire set of results in 3 successive requests by varying the offset value: offset&#x3D;0, offset&#x3D;5, and offset&#x3D;10. Note that the first item in the collection is retrieved by setting a zero offset.
     * @param search The search parameter is a query string for simple search.
     */
    public listGroupsWithHttpInfo(limit?: number, offset?: number, search?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/groups';

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
     * Update Group
     * 
     * @param name 
     * @param body 
     */
    public updateGroupWithHttpInfo(name: string, body?: models.Group, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/groups/${name}'
                    .replace('${' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updateGroup.');
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
