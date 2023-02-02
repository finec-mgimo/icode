# use cmd.exe instead of sh:
set shell := ["cmd.exe", "/c"]

# List available commands
list:
  just --list

# Build documentation
build:
  yarn run vitepress build docs

# Serve documentation
serve:
  yarn run vitepress dev docs

# Prettify markdown files
pretty:
  npx prettier *.md **/*.md --write  

# Publish to Github Pages
publish:
  rm -rf docs/.vitepress/dist
  just pretty
  just build
  just ghp

# Push to Github Pages
ghp:
  ghp-import -nfp docs/.vitepress/dist

