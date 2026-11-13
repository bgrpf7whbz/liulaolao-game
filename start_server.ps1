$dir = "D:\立夏\同济\论文\Part2沉浸式互动视频\Immersion Game"
Set-Location $dir
Start-Process -FilePath "D:\AppGallery\pythonw.exe" -ArgumentList "-m","http.server","8080","--bind","127.0.0.1" -WindowStyle Hidden
Write-Host "服务器已启动：http://127.0.0.1:8080"
