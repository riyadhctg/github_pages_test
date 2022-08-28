const data = [
  {
      "title": "Linux",
      "subtitle": "ls",
      "description": "lists contents of the current directory"
  },
  {
      "title": "Git",
      "subtitle": "git branch -a",
      "description": "lists all branches"
  },
  {
      "title": "Git",
      "subtitle": "git checkout -b new_branch_name",
      "description": "Create a new git branch in local named new_branch_name"
  },
  {
      "title": "Golang",
      "subtitle": "Can we extend Golang struct?",
      "description": `There is no extension in the "classical" OOP sense, embedding a type in a struct will not add fields of the embedded struct but add a single field with a type being the embedded type`
  },
  {
      "title": "Misc",
      "subtitle": "shebang",
      "description": `You may have seen this type of heading in scripts --> #!/bin/bash. It's called shebang. A shebang is only relevant when a script has the execute permission (e.g. chmod u+x script.sh). Since it's commented out, it does not typically interfere with the script. When a shell executes the script it will use the specified interpreter. It's typically in this format: #!interpreter [optional-arg]`
  },
  {
      "title": "Python",
      "subtitle": "python -i file.py",
      "description": `This loads a python file in the console and lets you use the python code in that file interactively.`
  },
  {
      "title": "Golang",
      "subtitle": `go mod init <module path>`,
      "description": ` When your code imports packages contained in other modules, you manage those dependencies through your code's own module. That module is defined by a go.mod file that tracks the modules that provide those packages. That go.mod file stays with your code, including in your source code repository.
      
      To enable dependency tracking for your code by creating a go.mod file, run the go mod init command, giving it the name of the module your code will be in. The name is the module's module path.`
  },
  {
      "title": "Git",
      "subtitle": `git revert --no-commit 0566b053..HEAD`,
      "description": `This will revert everything from the HEAD back to the commit hash, meaning it will recreate that commit state in the working tree as if every commit after 0766c053 had been walked back. You can then commit the current tree, and it will create a brand new commit essentially equivalent to the commit you "reverted" to.
	    The --no-commit flag lets git revert all the commits at once- otherwise you'll be prompted for a message for each commit in the range, littering your history with unnecessary new commits.
	    This is a safe and easy way to rollback to a previous state. No history is destroyed, so it can be used for commits that have already been made public. Source: https://stackoverflow.com/a/21718540`
  }
  
]
