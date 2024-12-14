This is a Microfrontend Architecture using rsbuild and module federation.

## Set up

This is a monorepo setup with workspaces inside the root directory's package.json so,

Just run `npm i` at the root directory.

Run `npm run dev` on both mfe-client-a and mfe-client-b directories.

Finally run `npm run dev` on mfe-host directory.

## See it in action

Open up `localhost:3000` on your browser.

`localhost:3000/mfe_client_a` will load client-a mfe and `localhost:3000/mfe_client_b` will load client-b mfe.

They also have their own child page called `extra-page`

E.g. `localhost:3000/mfe_client_a/extra-page` and `localhost:3000/mfe_client_b/extra-page`
