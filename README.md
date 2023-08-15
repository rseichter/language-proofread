Atom developers [discontinued](https://github.blog/2022-06-08-sunsetting-atom/) the editor in 2022,
so this repository will be archived as of August 2023.

---

This is a grammar package for the [Atom](https://atom.io/) editor.
It is aimed at processing text for the Distributed Proofreaders projects
([Canada](http://www.pgdpcanada.net/) and [USA](https://www.pgdp.net/)).

This grammar can cope with common issues found in the P1 stage, e.g.:

* Superfluous whitespaces.
* EOL word breaks.
* 1/l/I scannos.

With default settings, the grammar is applied to files with *.dp* and
*.proofread* name suffixes. You can use menus or the `Ctrl-Shift-p` shortcut to
activate the reformat the selected text according to Distributed Proofreaders
guidelines If no text is selected, the whole buffer content will be reformatted.
