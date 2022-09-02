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
  },
	  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Be humble",
      "description": `No engineer in the world knows everything, the same applies to you. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Make it work, make it right.",
      "description": `(and sometimes make it fast). Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Optimize for change",
      "description": `Prefer duplication over the wrong abstraction. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Always write tests",
      "description": `If you're not writing tests, you're testing manually. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },  
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Prefer functional programming",
      "description": `It's easier to understand. If your code requires a Ph.D. to understand, you’re most likely doing it wrong. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Delete as much code as you can",
      "description": `That's it. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Good Enough is Better than Perfect -",
      "description": ` Don't discard meaningful improvement just because it's not perfect. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Criticize in private, praise in public",
      "description": `That's it. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Make notes",
      "description": `If you think you will remember it, you're lying to yourself. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Talk to your users",
      "description": `The best software is built by engineers who have empathy for their users. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Learn with intention",
      "description": `Practice with a clear and specific goal in mindwhat you want to improve and exactly how (deliberate practice). Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Do not generalize early",
      "description": `Wait until you have at least 3 duplicates of code before you make an abstraction (aka. Rule Of Three). Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Fix broken windows",
      "description": `One hack in code leads to another hack. Soon your code will become unmanageable. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Fix the problem",
      "description": `doesn't matter whose fault it is, it is your problem. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Do what works, not what's fashionable",
      "description": `Try it first with a small team. If it works, expand. If not, abort. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "The best work requires a good rest",
      "description": `Regular time off is essential for top performance. You also don’t expect professional sprinters to sprint all the time. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Take small steps",
      "description": `Big rewrites don't work. You will lose motivation and focus along the way. Aim to release daily. It gives you the freedom to change focus when necessary. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Praise for good work",
      "description": `Something we've observed in animals, but works for people too. You will get better results when you praise people for good work rather than punishing them for a bad one. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  },
  {
      "title": "Principles / Tips for Software Development",
      "subtitle": "Perfect code doesn't exist",
      "description": `It's better to accept this as a fact rather than wasting time and chasing the impossible. Source: https://ondrejsevcik.com/blog/20-rules-in-10-years`
  }
  
]
