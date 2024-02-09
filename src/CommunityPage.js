import "./App.css";

import { AmityUiKitFeed, AmityUiKitProvider, AmityUIKitCommunitySideSection } from "@amityco/ui-kit-open-source";

const apiKey = "b3bee90c39d9a5644831d84e5a0d1688d100ddebef3c6e78";

export default function CommunityPage() {
  return (
    <div className="CommunityPage" styles={{ height: '500px', overflowY: 'scroll' }} >
        <AmityUiKitProvider
          key="test"
          apiKey={apiKey}
          userId="test"
          displayName="test"
        >

        {/* <AmityUiKitFeed/> */}
        <AmityUIKitCommunitySideSection/>

        </AmityUiKitProvider>
    </div>
  );
}