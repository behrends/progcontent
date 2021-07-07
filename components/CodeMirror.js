import { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import {
  EditorView,
  highlightActiveLine,
  keymap,
} from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { lineNumbers } from '@codemirror/gutter';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { bracketMatching } from '@codemirror/matchbrackets';
import { javascript } from '@codemirror/lang-javascript';

export default function CodeMirror() {
  const editor = useRef(null);

  useEffect(() => {
    const state = EditorState.create({
      doc: `// Hello JavaScript!
1 + 3;
console.log('Hey!');`,
      extensions: [
        defaultHighlightStyle,
        highlightActiveLine(),
        lineNumbers(),
        bracketMatching(),
        javascript(),
        EditorState.phrases.of(germanPhrases),
        keymap.of(defaultKeymap),
        runKeymap(),
      ],
    });
    const view = new EditorView({ state, parent: editor.current });
    let console = window.console;
    let original = console.log;
    console.log = function (...args) {
      document.getElementById('output').innerText += args;
      original.apply(console, args);
    };
    return () => {
      view.destroy();
      console.log = original;
    };
  }, []);

  return (
    <div>
      <section ref={editor} />
      <section id="output" />
    </div>
  );
}

function runKeymap() {
  return keymap.of([
    {
      key: 'Mod-Enter',
      run(editorView) {
        document.getElementById('output').innerText = '';
        let val = editorView.state.doc.toString();
        let output = new Function(val)();
        return true;
      },
    },
  ]);
}

// taken from https://codemirror.net/6/examples/translate/
const germanPhrases = {
  // @codemirror/view
  'Control character': 'Steuerzeichen',
  // @codemirror/fold
  'Folded lines': 'Eingeklappte Zeilen',
  'Unfolded lines': 'Ausgeklappte Zeilen',
  to: 'bis',
  'folded code': 'eingeklappter Code',
  unfold: 'ausklappen',
  'Fold line': 'Zeile einklappen',
  'Unfold line': 'Zeile ausklappen',
  // @codemirror/search
  'Go to line': 'Springe zu Zeile',
  go: 'OK',
  Find: 'Suchen',
  Replace: 'Ersetzen',
  next: 'nächste',
  previous: 'vorherige',
  all: 'alle',
  'match case': 'groß/klein beachten',
  replace: 'ersetzen',
  'replace all': 'alle ersetzen',
  close: 'schließen',
  'current match': 'aktueller Treffer',
  'on line': 'auf Zeile',
  // @codemirror/lint
  Diagnostics: 'Diagnosen',
  'No diagnostics': 'Keine Diagnosen',
};
