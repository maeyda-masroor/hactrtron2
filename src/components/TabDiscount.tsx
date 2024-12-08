"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function TabsComponent() {
  return (
    <Tabs>
      {/* Tab List */}
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      {/* Tab Panels */}
      <TabPanel>
        <div>
          <h2 className="text-lg font-bold">Content for Tab 1</h2>
          <p>This is the content displayed for the first tab.</p>
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <h2 className="text-lg font-bold">Content for Tab 2</h2>
          <p>This is the content displayed for the second tab.</p>
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <h2 className="text-lg font-bold">Content for Tab 3</h2>
          <p>This is the content displayed for the third tab.</p>
        </div>
      </TabPanel>
    </Tabs>
  );
}
