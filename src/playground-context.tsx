import React from 'react';

type Action = { type: 'setWeaviateUri' | 'removeWeaviateUri'; data: string };
type Dispatch = (action: Action) => void;
type State = { uri?: string };
type PlaygroundProviderProps = { children: React.ReactNode };

const PlaygroundStateContext = React.createContext<State | undefined>(undefined);
const PlaygroundDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function globalReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setWeaviateUri': {
      localStorage.setItem('weaviateUri', action.data);
      return {
        ...state,
        uri: action.data
      };
    }
    case 'removeWeaviateUri': {
      localStorage.removeItem('weaviateUri');
      return {
        ...state,
        uri: undefined
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PlaygroundProvider({ children }: PlaygroundProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(globalReducer, { uri: undefined });

  return (
    <PlaygroundStateContext.Provider value={state}>
      <PlaygroundDispatchContext.Provider value={dispatch}>
        {children}
      </PlaygroundDispatchContext.Provider>
    </PlaygroundStateContext.Provider>
  );
}

function usePlaygroundState(): State {
  const context = React.useContext(PlaygroundStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a PlaygroundProvider');
  }
  return context;
}

function usePlaygroundDispatch(): Dispatch {
  const context = React.useContext(PlaygroundDispatchContext);
  if (context === undefined) {
    throw new Error('usePlaygroundDispatch must be used within a PlaygroundProvider');
  }
  return context;
}

export { PlaygroundProvider, usePlaygroundState, usePlaygroundDispatch };
