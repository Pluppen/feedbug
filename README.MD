# Feedbug 🪲 🎯
Feedbug is a simple [React](https://github.com/facebook/react) button that you can integrate to get fast feedback and bug reports from users. Currently feedbug supports custom callbacks and Github issues.

## How to use

### Custom callback
Step 1
```bash
# Install npm package
$ npm install feedbug
```

Step 2
```javascript
import {Button} from "feedbug"

const Component = () => {
    return (
        <Button
            text="Report bug"
            type="bug"
            action="custom"
            onSubmit={() => {/*Do something*/}}
        />
    );
}
```

### Github
Step 1
```bash
# Install npm package
$ npm install feedbug
```

Step 2
```javascript
import {Button} from "feedbug"

const GithubComponent = () => {
    return (
        <Button
            text="Report bug to Github repo"
            type="bug"
            action="github"
            githubToken="<github-personal-access-token>"
            githubURL="https://api.github.com/repos/<repo-owner>/<repo-name>/issues"
        />
    );
}
```

## License
MIT