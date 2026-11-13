@echo off
cd /d "%~dp0"
start "" "D:\AppGallery\pythonw.exe" -m http.server 8080 --bind 0.0.0.0
