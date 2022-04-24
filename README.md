<p align="center">
  ![build-test](https://github.com/devops-actions/json-to-file/actions/workflows/test.yml/badge.svg)
</p>

# Purpose
Write JSON from to a file, without having to worry about string escaping on a bash script.

# Usage
``` yaml
- uses: devops-actions/json-to-file@main
  with:
    json: '{"test": "test"}'
    filename: 'test.json'
```