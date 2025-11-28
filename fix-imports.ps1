# Script to fix import paths for Vite compatibility
$srcPath = ".\src"

# Function to calculate relative path
function Get-RelativePath {
    param($from, $to)
    $fromParts = $from.Split('\')
    $toParts = $to.Split('\')
    
    # Find common base
    $commonLength = 0
    for ($i = 0; $i -lt [Math]::Min($fromParts.Length, $toParts.Length); $i++) {
        if ($fromParts[$i] -eq $toParts[$i]) {
            $commonLength++
        } else {
            break
        }
    }
    
    # Build relative path
    $upLevels = $fromParts.Length - $commonLength - 1
    $relativePath = ("..\\" * $upLevels) + ($toParts[$commonLength..($toParts.Length-1)] -join '\')
    
    return $relativePath -replace '\\', '/'
}

# Get all .jsx and .js files
$files = Get-ChildItem -Path $srcPath -Include "*.jsx","*.js" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    # Fix common absolute imports
    $patterns = @{
        'from "components/' = 'from "components/'
        'from "examples/' = 'from "examples/'
        'from "layouts/' = 'from "layouts/'
        'from "assets/' = 'from "assets/'
        'from "context"' = 'from "./context"'
        'from "routes"' = 'from "./routes.jsx"'
    }
    
    # These imports should use path aliases (already configured in vite.config.js)
    # So we don't need to change them - they're correct
    
    # Fix context and routes imports based on file location
    $fileDir = Split-Path $file.FullName -Parent
    $srcDir = Resolve-Path $srcPath
    
    # Only fix context and routes if they're imported without path alias
    if ($content -match 'from "context"') {
        $relPath = Get-RelativePath -from $fileDir -to (Join-Path $srcDir "context")
        if (-not $relPath.StartsWith('.')) {
            $relPath = "./$relPath"
        }
        $content = $content -replace 'from "context"', "from `"$relPath`""
        $modified = $true
    }
    
    if ($content -match 'from "routes"') {
        $relPath = Get-RelativePath -from $fileDir -to (Join-Path $srcDir "routes.jsx")
        if (-not $relPath.StartsWith('.')) {
            $relPath = "./$relPath"
        }
        $content = $content -replace 'from "routes"', "from `"$relPath`""
        $modified = $true
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Fixed imports in: $($file.FullName)"
    }
}

Write-Host "`nDone fixing import paths!"
