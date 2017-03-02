[Momentum]: https://momentumdash.com/
[Get Momentum]: https://github.com/chingubelugas/get-momentum
[Resolving Merge Conflicts]: https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/

# get-momentum
reverse-engineering this beautiful chrome app: [Momentum][] 

##Description
Get Momentum is inspired by a popular Chrome extension app called [Momentum][] that has over 2.5 million users and is rated 4.5 of 5 stars from 9241 people. Download it in the Chrome App Store!

What does it do? Get Momentum will gently take over your default home screen on Google Chrome with a new inspirational photo each day. It's not just a pretty picture! It will also assist you in making your days more productive with a daily reminder of your goal, a todo list, a place to save your favorite links, a pomodoro timer, and even a weather check. 

##Getting Started
####Before Getting Started, install Node on your machine
1. Fork the [Get Momentum][] repo to your Github account
2. Clone the repo from your Github account to your machine. 
3. CD into your Get Momentum directory and run the following commands:
  - npm install (installs all of the dependencies needed)
  - git remote add upstream https://github.com/chingubelugas/get-momentum (set a remote to the main repo so later you can pull down updates from other team members)
  - npm run start

##Update Your Project
1. Commit your changes or remove them from staging
2. Check your remotes by running git remote -v. You should see your origins and the upstreams.

```javascript
origin	https://github.com/vientang/get-momentum.git (fetch)
origin	https://github.com/vientang/get-momentum.git (push)
upstream	https://github.com/chingubelugas/get-momentum.git (fetch)
upstream	https://github.com/chingubelugas/get-momentum.git (push)
```

3. Run git pull --rebase upstream master
4. You now have the latest code! 
5. Do you see merge conflicts? This [Resolving Merge Conflicts][] article is pretty good for explaining what to do.

