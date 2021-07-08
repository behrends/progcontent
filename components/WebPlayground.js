import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Playground from '@agney/playground';
/* Why is there a tabs import? https://github.com/agneym/playground#why-is-there-a-reacttabs-import*/
import '@reach/tabs/styles.css';

const WebPlayground = ({
  markup = '',
  css = '',
  javascript = '',
  defaultEditorTab = 'markup',
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const fixedTheme = getTheme(theme);

  // When mounted on client, now we can show the UI
  // this makes sure the UI theme is known
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const snippet = { markup, css, javascript };
  return (
    <Playground
      id="example"
      initialSnippet={snippet}
      defaultEditorTab={defaultEditorTab}
      mode={theme}
      theme={fixedTheme}
    />
  );
};

export default WebPlayground;

// fix for dark mode in WebPlayground
// source: https://github.com/agneym/playground/blob/master/playground/src/utils/theme.ts
// in nextra dark mode would screw up transparent tab background and borders (see below)
import merge from 'lodash.merge';

const lightModeColors = {
  container: {
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  error: {
    background: '#e74c3c',
    color: '#ffffff',
  },
  console: {
    background: 'rgba(0, 0, 0, 1)',
  },
  divider: {
    background: '#202020',
  },
  editor: {
    backgroundColor: `#000000`,
    color: `#ffffff`,
  },
  tabs: {
    tabHeader: {
      background: '#FFFFFF', // fixed: in original this is 'transparent'
      panelBackground: '#FFFFFF', // fixed: in original this is empty in light mode
      color: `#000000`,
      borderBottom: `0.1em solid rgba(0, 0, 0, 0.1)`,
    },
    selectedTab: {
      borderBottom: '0.2em solid rgba(0, 0, 0, 1)', // fixed: in original this is empty in light mode
    },
  },
};

const darkModeColors = {
  container: {
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  error: {
    background: '#e74c3c',
    color: '#ffffff',
  },
  console: {
    background: 'rgba(0, 0, 0, 1)',
  },
  divider: {
    background: 'rgba(255, 255, 255, 0.5)',
  },
  editor: {
    backgroundColor: `#000000`,
    color: `#ffffff`,
  },
  tabs: {
    tabHeader: {
      background: `rgba(1, 21, 21, 0.8)`,
      panelBackground: `rgb(1, 21, 21)`,
      color: `#ffffff`,
      borderBottom: `0.1em solid rgba(255, 255, 255, 0.4)`,
    },
    selectedTab: {
      borderBottom: '0.2em solid rgb(255, 255, 255)',
    },
  },
};

const myTheme = {
  container: {
    borderColor: '',
    minHeight: '20em',
    minWidth: '15em',
  },
  error: {
    background: '',
    color: '',
  },
  console: {
    background: 'rgba(0, 0, 0, 1)',
  },
  divider: {
    width: 2,
    background: '',
  },
  editor: {
    fontFamily: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
    backgroundColor: ``,
    color: ``,
  },
  tabs: {
    tabHeader: {
      borderBottom: '',
      panelBackground: '',
      background: '',
      color: '',
    },
    tabPanel: {
      phoneHeight: '10em',
    },
    selectedTab: {
      background: '',
      borderBottom: '0.2em solid rgb(0, 0, 0)',
    },
  },
};

function getTheme(mode = 'light') {
  const colorTheme =
    mode === 'light' ? lightModeColors : darkModeColors;
  return merge(myTheme, colorTheme);
}
