import Playground from '@agney/playground';
/* Why is there a tabs import? https://github.com/agneym/playground#why-is-there-a-reacttabs-import*/
import '@reach/tabs/styles.css';

const WebPlayground = ({
  markup = '',
  css = '',
  javascript = '',
  defaultEditorTab = 'markup',
}) => {
  const snippet = { markup, css, javascript };
  return (
    <Playground
      id="example"
      initialSnippet={snippet}
      defaultEditorTab={defaultEditorTab}
    />
  );
};

export default WebPlayground;
