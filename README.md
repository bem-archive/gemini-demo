# gemini-demo

This is a Gemini Demo project.

## Local setup and tests running

1. Create SauceLabs account if you don't have one.
2. Clone this repo and run `npm run deps`. This will install `npm` and `bower` dependencies.
3. Download and setup [Souce Connect](https://saucelabs.com/connect).
4. Export `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.
5. Run `sc` (downloaded SauceConnect application) in a separate terminal session.
6. Run `npm run server` in a separate terminal session. This will build the project files and run HTTP server.
7. Run `npm test`.

