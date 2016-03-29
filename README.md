Pay Me
=======

This is an example payment form handling app, it uses vanilla JS with
client side validation, an Express based backend and Jade for templating
HTML.

## Installation

First, you need to have Node.js installed.

With OSX:
If you don't you should:

```
brew install node
```

Don't have [Homebrew](http://brew.sh/)? Install it!

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

With Windows:
If you use Windows, point your browser (or Powershell) at:

```
https://nodejs.org/dist/v5.9.1/node-v5.9.1-x86.msi
```

You may also be able to use NuGet.

**Note:** You should make sure node's binary is on your system PATH
(check with node --version).

Now, clone the repository.

Once you have it downloaded, move into that directory and install all of
the dependencies with:

```
npm install
```

You should also install [Gulp](gulpjs.com) globally with:

```
npm install -g gulp-cli
```

# Development

Running the default gulp task with `gulp` should start the server and
make it available (by default) on port 3000. If you want to define an
alternative port, you can use an environment variable like so:

```
PORT=4242 gulp
```
