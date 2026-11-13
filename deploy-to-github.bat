@echo off
chcp 65001 >nul
echo ==========================================
echo  部署到 GitHub Pages
echo ==========================================
echo.
echo 步骤：
echo 1. 打开 https://github.com/new 创建一个公开仓库
echo    仓库名建议：liulaolao-game
echo 2. 在下面输入你的 GitHub 用户名
echo.
set /p USERNAME=GitHub 用户名: 
set /p REPO=仓库名（默认 liulaolao-game）: 
if "%REPO%"=="" set REPO=liulaolao-game

git remote remove origin 2>nul
git remote add origin https://github.com/%USERNAME%/%REPO%.git
git branch -M main
git push -u origin main

echo.
echo 推送完成！
echo 接下来请访问：
echo   https://github.com/%USERNAME%/%REPO%/settings/pages
echo 在 Source 中选择 Deploy from a branch ^> main ^> /root，然后 Save。
echo 几分钟后即可通过以下地址访问：
echo   https://%USERNAME%.github.io/%REPO%/
echo.
pause
