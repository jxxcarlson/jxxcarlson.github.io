# The Scripta Project

Scripta is an editing and publishing system for technical
documents (mathematics, physics, etc.). It consists
of two components, the web app [Scripta.io](https://scripta.io)
and the the [Scripta compiler](https://github.com/jxxcarlson/scripta-compiler).
The Scripta compiler supports three markup languages

- L0
- MicroLaTeX
- XMarkdown

L0 has a syntax inspired by Lisp; MicroLaTeX is 
an implementation of LaTeX, and XMarkdown is
like Markdown, but with some extra features,
e.g., TeX-style mathematical text.


Both the app and the compiler are written in 
[Elm](https://elm-lang.org), a pure functional language
that compiles to Javascript.  The app also uses
the [Lamdera](https://lamdera.com/) framework, which
permits one to write both the front and the backend in
Elm.  See this [short note on Lamdera](/lamdera/).

For a quick demo of the compiler as it applies to
microLaTeX, please see [this example app](https://jxxcarlson.github.io/scripta-compiler-example1/
).  You can edit the text of this app at will.