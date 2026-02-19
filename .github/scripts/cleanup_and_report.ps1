if (Test-Path 'dist') {
  $size=(Get-ChildItem 'dist' -Recurse -File | Measure-Object Length -Sum).Sum
  Write-Output "DIST_SIZE_BYTES:$size"
  Get-ChildItem 'dist' -Recurse -File | Sort-Object Length -Descending | Select-Object -First 50 | ForEach-Object { Write-Output ("{0} {1:N2}MB" -f $_.FullName, ($_.Length/1MB)) }
  Remove-Item -Recurse -Force 'dist\static' -ErrorAction SilentlyContinue
  Remove-Item -Recurse -Force 'dist\public' -ErrorAction SilentlyContinue
  Remove-Item -Recurse -Force 'dist\assets\images' -ErrorAction SilentlyContinue
  Get-ChildItem 'dist' -Recurse -File | Where-Object {$_.Length -gt 5MB} | ForEach-Object { Write-Output ("Removing large file: {0} {1:N2}MB" -f $_.FullName, ($_.Length/1MB)); Remove-Item -Force $_.FullName }
  $size2=(Get-ChildItem 'dist' -Recurse -File | Measure-Object Length -Sum).Sum
  Write-Output "DIST_SIZE_BYTES_AFTER:$size2"
} else {
  Write-Output "NO_DIST"
}
