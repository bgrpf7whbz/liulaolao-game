@echo off
chcp 65001 >nul
echo ==========================================
echo  部署到 Gitee Pages
echo ==========================================
echo.
echo 前置条件：
echo 1. 已注册 Gitee 账号（https://gitee.com）
echo 2. 已完成实名认证
echo 3. 已创建公开仓库，仓库名建议：liulaolao-game
echo.
set /p USERNAME=Gitee 用户名: 
set /p REPO=仓库名（默认 liulaolao-game）: 
if "%REPO%"=="" set REPO=liulaolao-game

git remote remove origin 2>nul
git remote add origin https://gitee.com/%USERNAME%/%REPO%.git
git branch -M main
git push -u origin main

echo.
echo 推送完成！
echo 接下来请访问：
echo   https://gitee.com/%USERNAME%/%REPO%/pages
echo 点击「启动」按钮，等待部署完成。
echo 部署成功后，访问地址为：
echo   https://%USERNAME%.gitee.io/%REPO%/
echo.
pause
