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

import * as models from './models';

export interface User {
    login: string;

    password?: string;

    firstName: string;

    lastName: string;

    email: string;

    company?: string;

    groups?: Array<string>;

    administrator?: boolean;

    anonymous?: boolean;

    username?: string;

}
