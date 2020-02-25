import React from 'react';

interface ActionSet {
  type?: 'setWeaviateUri';
  data: string;
}

interface ActionRemove {
  type?: 'removeWeaviateUri';
}

type ActionTypes = ActionSet | ActionRemove;
type Dispatch = (action: ActionTypes) => void;
type State = { uri?: string; isLoggedIn?: boolean };
type PlaygroundProviderProps = { children: React.ReactNode };

const PlaygroundStateContext = React.createContext<State | undefined>(undefined);
const PlaygroundDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function globalReducer(state: State, action: ActionTypes): State {
  switch (action.type) {
    case 'setWeaviateUri': {
      localStorage.setItem('weaviateUri', action.data);
      localStorage.setItem('isLoggedIn', 'true');
      return {
        ...state,
        isLoggedIn: true,
        uri: action.data
      };
    }
    case 'removeWeaviateUri': {
      localStorage.removeItem('weaviateUri');
      localStorage.removeItem('isLoggedIn');
      return {
        ...state,
        isLoggedIn: undefined,
        uri: undefined
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PlaygroundProvider({ children }: PlaygroundProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(globalReducer, {
    uri: localStorage.getItem('weaviateUri') || undefined,
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || undefined
  });

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
