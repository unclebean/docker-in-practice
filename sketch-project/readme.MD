# Setup nodejs project

```
    # initial project
    npm init
    # install unit test dependencies, -D means --save-dev
    npm install -D mocha chai sinon chai-http nyc
    # integrate eslint & prettier & airbnb style guide
    npm install -D eslint prettier
    # peerdeps means to install corresponding airbnb version for eslint
    npx install-peerdeps --dev eslint-config-airbnb
    # install prettier eslint integration tools
    npm install -D eslint-config-prettier eslint-plugin-prettier
```

# Setup eslint & prettier config

```
    # create .eslintrc.json
    {
        "env": {
            "node": true,
            "mocha": true
        },
        "extends": ["airbnb", "prettier"],
        "plugins": ["prettier"],
        "rules": {
            "prettier/prettier": ["error"]
        }
    }
```

```
    # create .prettierrc
    {
        "printWidth": 100,
        "singleQuote": true
    }
```

# Add eslint task to package.json

```
    "scripts": {
        "eslint": "eslint src/*"
    }
```

# Add nyc config to package.json

```
    "nyc": {
        "all": true,
        "check-coverage": false,
        "per-file": true,
        "include": [
            "src/**/*.js",
            "scr/client/http-client.js"
        ],
        "exclude": [
            "test/**/*.test.js"
        ],
        "reporter": [
            "lcov"
        ]
    }
```

# Create unit test

```
    "scripts": {
        "test": "nyc mocha"
    }

    npm test
```

# Make an API call

```
    # install node-fetch
    npm install node-fetch --save
```
