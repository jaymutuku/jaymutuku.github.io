### Blog

### How to deploy

#### Step 1: Check that you are on development branch
```
$ git checkout develop
```

#### Step 2: Add your changes
```
$ git add .
```

#### Step 3: Commit them
```
$ git commit -m " updated README.md"
```

#### Step 4: Push changes to remote branch -development
```
$ git push origin develop
```
#### Step 5: Checkout the master branch
```
$ git checkout master
```
#### Step 6: Merge development to master
```
$ git merge develop
```
#### Step 7: Deploy your site to your master branch
```
$ npm run build && node ./scripts/deploy-github
```

### Step 8: Check your site is running and changes were effected

https://jaymutuku.github.io
