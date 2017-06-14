Eventmakr
==============
Web services for eventmakr

### Install
[Mongodb](https://www.mongodb.org/) is suggested in order to develop with a local database.
```
npm install
```

### Start the server
Before you start the server, the server requires a couple of environment variables to be set.  You should get these in an email.

You will also need to have your hosts file modified to accept local.eventmakr.com to 127.0.0.1 (this is required in order to authenticate with fb oauth)

```
npm start
```

### Testing
```
npm test
```

Sometimes it helps to be able to mock s3 while doing some testing.  S3rver project is recommended:

```
npm install -g s3rver
mkdir -p ~/.s3rver/eventmakr-vendors
s3rver -d ~/.s3rver
```

### Authentication
1. Navigate to http://local.eventmakr.com:3000/api/auth/facebook
2. Log in with facebook and authorize
3. Facebook will redirect you back to local.eventmakr.com to a blank page
4. Try using the api now, ie. http://local.eventmakr.com/api/v1/vendor
