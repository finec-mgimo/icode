# List available commands
list:
  just --list

# Build documentation
build:
  npx vuepress dev build

# Serve documentation
serve:
  npx vuepress dev docs

# Prettify markdown files
pretty:
  npx prettier *.md **/*.md --write  
