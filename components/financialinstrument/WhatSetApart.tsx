import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";


export const WhatSetApart = () => {
  return (
    <div className="w-3/4 shadow-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3 border-[1px] border-[]">
            <h1 className="text-[25px] font-bold m-auto text-center p-1">What set us apart?</h1>
            <div className="">
              {/* {UBLarray.map((data, index) => ( */}
              <div>
                <Tabs orientation="vertical" isFitted variant="line">
                  <TabList
                    
                    className="text-black  font-bold text-left text-[20px] flex flex-col"
                  >
                    <ul className="text-left">
                      <li>
                      <Tab className="text-left">1. Fast Turnaround Time</Tab>
                      </li>
                      <li>
                      <Tab className="text-left">2. Confidentiality</Tab>
                      </li>
                      <li>
                      <Tab className="text-left">3. Competitive ROI</Tab>
                      </li>
                      <li>
                      <Tab className="text-left">4. Hassle-free Processing</Tab>
                      </li>
                      <li>
                      <Tab className="text-left">5. High Level of Integrity</Tab>
                      </li>

                    </ul>
                    
                    
                    
                   
                  </TabList>
                  <TabIndicator 
                      mt="-1.5px"
                      height="2px"
                      bg="blue.500"
                      borderRadius="1px"
                    />
                  <TabPanels  className="border-[1px]" >
                    <TabPanel className="">
                      We cordially track the deadlines and make our quality
                      tangible, while executing finance projects well ahead of
                      time.
                    </TabPanel>
                    <TabPanel>
                      We comply with the highest professional confidentiality
                      standards. All client information is discussed in strict
                      confidentiality.
                    </TabPanel>
                    <TabPanel>
                      We find you the right lenders with the similar terms and
                      the lowest rate of interest.
                    </TabPanel>
                    <TabPanel>
                      We create a stable ownership structure for financiers by
                      establishing a secure transaction process.
                    </TabPanel>
                    <TabPanel>
                      We are building our reputation through reliability,
                      integrity, and honesty. We connect to our clients on
                      personal grounds that include transparency and liability.
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
              {/* ))} */}
            </div>
          </div>
  )
}
