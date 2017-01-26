# README

Example app of a cloudinary CORS issue.

# Setup

1. Create a new `.env` file by copying `.env.sample` and adding the required Cloudinary secret.
2. Update the two functions in `client/app/bundles/HelloWorld/utils/upload.js` with Cloudinary cloud name and Cloudinary api key.

You should be good to go!

# Startup

From project root, start the server then open the React homepage.

```
$ foreman start -f Procfile.dev
$ open http://localhost:3000/hello_world
```

# Recreate Issue

1. Open `http://localhost:3000/hello_world` in Chrome.
2. Open javascript console.
3. Drag an image file into the dropzone.
4. Once file upload is finished, you should see a `No 'Access-Control-Allow-Origin' header is present on the requested resource` error in the javascript console.


