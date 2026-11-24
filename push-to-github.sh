#!/bin/bash
# 一键推送到 GitHub（在 Git Bash 中运行）

USER='bgrpf7whbz'
REPO='liulaolao-game'

echo "正在推送到 GitHub..."
echo "请去 https://github.com/settings/tokens 生成一个勾选 repo 权限的 token"
echo "粘贴时建议用鼠标右键 -> Paste"
read -sp "输入 GitHub Personal Access Token: " TOKEN_RAW
echo ""

# 去掉首尾空白和常见多余字符
TOKEN=$(echo "${TOKEN_RAW}" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

if [ -z "$TOKEN" ]; then
  echo "错误：token 为空，请重新运行脚本。"
  read -p "按回车键退出"
  exit 1
fi

if [ ${#TOKEN} -lt 20 ]; then
  echo "错误：token 长度太短（${#TOKEN} 个字符），可能没有复制完整。"
  read -p "按回车键退出"
  exit 1
fi

echo "你输入的 token 是：${TOKEN:0:8}...${TOKEN: -4}"

git remote remove origin 2>/dev/null
git remote add origin "https://${USER}:${TOKEN}@github.com/${USER}/${REPO}.git"
git push -u origin main
git remote set-url origin "https://github.com/${USER}/${REPO}.git"

echo "完成。"
read -p "按回车键退出"
