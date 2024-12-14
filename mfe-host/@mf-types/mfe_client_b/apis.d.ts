
    export type RemoteKeys = 'mfe_client_b/routes';
    type PackageType<T> = T extends 'mfe_client_b/routes' ? typeof import('mfe_client_b/routes') :any;