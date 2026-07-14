# Al Rayees SDN BHD — Static Dev Server (PowerShell HttpListener)
param([int]$Port = 5500)

$root = $PSScriptRoot

$mime = @{
  '.html'  = 'text/html; charset=utf-8'
  '.css'   = 'text/css'
  '.js'    = 'application/javascript'
  '.json'  = 'application/json'
  '.png'   = 'image/png'
  '.jpg'   = 'image/jpeg'
  '.jpeg'  = 'image/jpeg'
  '.gif'   = 'image/gif'
  '.svg'   = 'image/svg+xml'
  '.ico'   = 'image/x-icon'
  '.woff'  = 'font/woff'
  '.woff2' = 'font/woff2'
  '.ttf'   = 'font/ttf'
  '.xml'   = 'application/xml'
  '.txt'   = 'text/plain'
  '.webp'  = 'image/webp'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Al Rayees Dev Server  ->  http://localhost:$Port/"
Write-Host "Root: $root"
Write-Host "Press Ctrl+C to stop.`n"

try {
  while ($listener.IsListening) {
    $ctx  = $listener.GetContext()
    $req  = $ctx.Request
    $res  = $ctx.Response

    $url  = $req.Url.LocalPath -replace '\.\.[\\/]',''   # strip traversal
    if ($url -eq '/' -or $url -eq '') { $url = '/index.html' }

    $file = Join-Path $root ($url.TrimStart('/') -replace '/','\\')
    $file = [IO.Path]::GetFullPath($file)

    # Directory → index.html
    if ([IO.Directory]::Exists($file)) {
      $file = Join-Path $file 'index.html'
    }

    if ([IO.File]::Exists($file)) {
      $ext     = [IO.Path]::GetExtension($file).ToLower()
      $ct      = if ($mime[$ext]) { $mime[$ext] } else { 'application/octet-stream' }
      $bytes   = [IO.File]::ReadAllBytes($file)
      $res.StatusCode     = 200
      $res.ContentType    = $ct
      $res.ContentLength64 = $bytes.Length
      $res.Headers.Add('Cache-Control','no-cache')
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Host "200  $url"
    } else {
      $body = [Text.Encoding]::UTF8.GetBytes("404 Not Found: $url")
      $res.StatusCode      = 404
      $res.ContentType     = 'text/plain'
      $res.ContentLength64  = $body.Length
      $res.OutputStream.Write($body, 0, $body.Length)
      Write-Host "404  $url"
    }

    $res.OutputStream.Close()
  }
} finally {
  $listener.Stop()
}
