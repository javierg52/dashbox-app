// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/* 
 * Node.JS 17 uses OpenSSL 3.0 which breaks some Angular commands such as ng serve
 * As a work around until an official fix is released, preface each command with:
 * NODE_OPTIONS=--openssl-legacy-provider
 * 
 * i.e. NODE_OPTIONS=--openssl-legacy-provider ng serve -o
*/