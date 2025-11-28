# Fix all context imports to use the correct path alias
$srcPath = ".\src"

# Get all .jsx and .js files
$files = Get-ChildItem -Path $srcPath -Include "*.jsx","*.js" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    # Replace all variations of context imports with the path alias
    $patterns = @(
        @{ Pattern = 'from "\.\.\/context"'; Replacement = 'from "context"' }
        @{ Pattern = 'from "\.\./context"'; Replacement = 'from "context"' }
        @{ Pattern = 'from "\.\./\.\.\/context"'; Replacement = 'from "context"' }
        @{ Pattern = 'from "\.\.\/\.\.\/\/context"'; Replacement = 'from "context"' }
        @{ Pattern = 'from "\.\./\.\./context"'; Replacement = 'from "context"' }
        @{ Pattern = 'from "\.\.\/\.\.\/\.\.\/context"'; Replacement = 'from "context"' }
        @{ Pattern = 'from "\.\./\.\./\.\./context"'; Replacement = 'from "context"' }
        @{ Pattern = 'from "\.\.\/\.\.\/\.\.\/\/context"'; Replacement = 'from "context"' }
        @{ Pattern = 'from "\.\./\.\./\.\.//context"'; Replacement = 'from "context"' }
    )
    
    foreach ($p in $patterns) {
        if ($content -match $p.Pattern) {
            $content = $content -replace $p.Pattern, $p.Replacement
            $modified = $true
        }
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Fixed: $($file.FullName)"
    }
}

Write-Host "`nDone! All context imports now use path alias."
