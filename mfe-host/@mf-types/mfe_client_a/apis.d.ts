
    export type RemoteKeys = 'mfe_client_a/routes';
    type PackageType<T> = T extends 'mfe_client_a/routes' ? typeof import('mfe_client_a/routes') :any;