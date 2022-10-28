user_name=$(git config --global user.name)
echo ${commit_seql}

#  获取当前时间戳
# env="dev"
env="oci-test"
cur_sec=$(date "+%Y%m%d%H%M%S")
echo "export default '${env}-${cur_sec}'" > version.js
# tagName="${env}-${cur_sec}"
tagName="${env}-${cur_sec}"
echo "${tagName}"
git add .
git commit -m "feat: 🎸  auto publish tag：${tagName} by ${user_name}"
git tag -a "${tagName}" -m "jenkins_test_auto_rebuild"
git push origin ${tagName}
git push