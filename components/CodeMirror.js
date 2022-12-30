import { useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';

export default function CodeMirror({ code = '// JavaScript code' }) {
  const editor = useRef(null);

  useEffect(() => {
    const state = EditorState.create({
      doc: code,
      extensions: [basicSetup, javascript(), execCodeKeymap()],
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

function execCodeKeymap() {
  return keymap.of([
    {
      key: 'Shift-Enter',
      run(editorView) {
        document.getElementById('output').innerText = '';
        let val = editorView.state.doc.toString();
        new Function(val)();
        return true;
      },
    },
  ]);
}
