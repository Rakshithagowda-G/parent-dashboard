# Script to rename .js files containing JSX to .jsx
$srcPath = ".\src"

# Get all .js files in src directory recursively
$jsFiles = Get-ChildItem -Path $srcPath -Filter "*.js" -Recurse

foreach ($file in $jsFiles) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    
    # Check if file contains JSX syntax (looking for common JSX patterns)
    if ($content -match '<[A-Z][a-zA-Z0-9]*|<\/[A-Z]|<>|<\/>' -or 
        $content -match 'jsx|\.jsx|return \([\s\n]*<' -or
        $content -match 'return <') {
        
        $newName = $file.FullName -replace '\.js$', '.jsx'
        Write-Host "Renaming: $($file.FullName) -> $newName"
        Rename-Item -Path $file.FullName -NewName $newName -Force
    }
}

Write-Host "`nDone! All JSX files have been renamed."
