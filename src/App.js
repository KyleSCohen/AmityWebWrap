import "./App.css";
import { useState } from "react";

import { AmityUiKitFeed, AmityUiKitProvider } from "@amityco/ui-kit-open-source";
import Login from "./Login";

const apiKey = "b3bee90c39d9a5644831d84e5a0d1688d100ddebef3c6e78";

export default function App() {
  const [userId, setUserId] = useState();

  return (
    <div className="App" styles={{ height: '500px', overflowY: 'scroll' }} >
      {!userId ? (
        <Login onSubmit={setUserId} />
      ) : (
        <AmityUiKitProvider
          key={userId}
          apiKey={apiKey}
          userId={userId}
          displayName={userId}
        >

        <AmityUiKitFeed/>
        </AmityUiKitProvider>
      )}
    </div>
  );
}