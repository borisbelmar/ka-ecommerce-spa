import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

import Router from "./components/screens/Router"
import { CartContextProvider } from './components/context/CartContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24 // 24 hours
    }
  }
})

const persister = createSyncStoragePersister({
  storage: window.sessionStorage
})

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </PersistQueryClientProvider>
  )
}

export default App
