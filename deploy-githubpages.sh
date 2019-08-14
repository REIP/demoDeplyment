directory=_site
branch=gh-pages

echo -e "\033[0;32mCredentials ...\033[0m"

#git config --global user.name "REIP"
#git config --global user.email piere_u@hotmail.com
#git config --list

set +x; git config --local user.email 'piere_u@hotmail.com'
set +x; git config --local user.name REIP
set +x; git config --local push.default simple


echo -e "\033[0;32mDeleting existing $branch...\033[0m"
git push origin --delete $branch
git branch -D $branch

echo -e "\033[0;32mSetting up new $branch branch\033[0m"
git checkout --orphan $branch
git reset --hard
git commit --allow-empty -m "Init"
git checkout master

echo -e "\033[0;32mDeleting old content...\033[0m"
rm -rf $directory

echo -e "\033[0;32mChecking out $branch....\033[0m"
git worktree add $directory $branch

echo -e "\033[0;32mGenerating site...\033[0m"
npm run build-demo
cp dist/Angular-Lazy-Loading/* $directory

echo -e "\033[0;32mDeploying $branch branch...\033[0m"
cd $directory &&
  git status
  git add --all &&
  git commit -m "Deploy updates" &&
  git push origin $branch

echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove $directory