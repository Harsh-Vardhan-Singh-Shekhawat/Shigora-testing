import { useState } from "react";
import { Tab } from "@headlessui/react";

function MyTabs() {
  return (
    <Tab.Group>
      <div className="flex shadow-lg">
        <Tab.List className="flex flex-col">
          <Tab >Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
          <Tab>Tab 5</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            We cordially track the deadlines and make our quality tangible,
            while executing finance projects well ahead of time.
          </Tab.Panel>
          <Tab.Panel>
            We comply with the highest professional confidentiality standards.
            All client information is discussed in strict confidentiality.
          </Tab.Panel>
          <Tab.Panel>
            We find you the right lenders with the similar terms and the lowest
            rate of interest.
          </Tab.Panel>
          <Tab.Panel>
            We create a stable ownership structure for financiers by
            establishing a secure transaction process.
          </Tab.Panel>
          <Tab.Panel>
            We are building our reputation through reliability, integrity, and
            honesty. We connect to our clients on personal grounds that include
            transparency and liability.
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}

export default MyTabs;
