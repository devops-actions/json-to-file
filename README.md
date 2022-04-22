<p align="center">
  <a href="https://github.com/devops-actions/json-to-file/actions"><img alt="json-to-file action status" src="https://github.com/devops-actions/json-to-file/workflows/test/badge.svg"></a>
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