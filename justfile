# List available commands
list:
  just --list

# Build documentation
build:
  yfm -i ./docs -o ./_site

# Prettify markdown files
pretty:
  npx prettier *.md **/*.md --write  
