@echo off
chcp 65001 >nul
echo ==========================================
echo  推送到 GitHub（使用 Personal Access Token）
echo ==========================================
echo.
echo 你需要先有一个 GitHub Personal Access Token：
echo   1. 打开 https://github.com/settings/tokens
echo   2. 点击 Generate new token (classic)
echo   3. Note 填 liulaolao-game
echo   4. 勾选 repo 权限
echo   5. 生成后复制 token（ghp_ 开头）
echo.

set /p USERNAME=GitHub 用户名: 
set /p TOKEN=Personal Access Token: 
set /p REPO=仓库名（默认 liulaolao-game）: 
if "%REPO%"=="" set REPO=liulaolao-game

git remote remove origin 2>nul
git remote add origin https://%USERNAME%:%TOKEN%@github.com/%USERNAME%/%REPO%.git
git branch -M main
git push -u origin main

if %errorlevel% neq 0 (
  echo.
  echo 推送失败，请检查 token 和仓库名是否正确。
  pause
  exit /b %errorlevel%
)

:: 推送成功后，把 token 从 remote 地址里清掉
git remote set-url origin https://github.com/%USERNAME%/%REPO%.git

echo.
echo 推送成功！
echo 接下来请访问：
echo   https://github.com/%USERNAME%/%REPO%/settings/pages
echo 在 Source 中选择 Deploy from a branch ^> main ^> /root，然后 Save。
echo 几分钟后即可通过以下地址访问：
echo   https://%USERNAME%.github.io/%REPO%/
echo.
pause
