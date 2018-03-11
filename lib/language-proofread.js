const {
    CompositeDisposable
} = require('atom')

module.exports = {
    subscriptions: null,

    activate(state) {
        this.subscriptions = new CompositeDisposable();
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'language-proofread:proofreadText': () => this.proofreadText()
        }));
    },

    deactivate() {
        this.subscriptions.dispose();
    },

    proofreadText() {
        const editor = atom.workspace.getActiveTextEditor()
        if (editor) {
            s = editor.getSelectedText()
            if (s)
                selectionActive = true
            else {
                selectionActive = false
                s = editor.getText()
            }
            ct = this.stageP1(s)
            if (ct) {
                if (selectionActive) {
                    console.log("Replacing selected text")
                    editor.insertText(ct, {
                        "select": selectionActive
                    })
                } else {
                    console.log("Replacing full text")
                    editor.setText(ct)
                }
            }
        }
    },

    stageP1(s) {
        if (s) {
            console.log(s)
            ct = s
                .replace(new RegExp(/[ \t]{2,}/, "g"), " ")
                .replace(new RegExp(/[ \t]([\n\r]+)/, "g"), "$1")
                .replace(new RegExp(/(\w)-([\n\r]+)(\S+)[ \t]/, "g"), "$1$3$2")
                .replace(new RegExp(/(\w)-([\n\r]+)(\S+)[\n\r]+/, "g"), "$1$3$2$2")
                .replace(new RegExp(/\b[1l]\b/, "g"), "I")
            console.log(ct)
            if (s != ct)
                return ct
        }
        return undefined
    }
};
