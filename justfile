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
  ghp-import -nfp docs/.vitepress/dist
