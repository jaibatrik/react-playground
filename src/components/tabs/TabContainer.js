/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

 import React, {useState} from 'react';
 import Styled from '@oracle-cx-commerce/react-components/styled';
 import css from '@oracle-cx-commerce/react-components/tabs/styles.css';
 
 /**
  * A component that encapsulates the contents of individual tab panels. Accepts
  * a `header` prop that is shown in the corresponding tab header.
  *
  * Example:
  * ```
  * <Tab header={<span>My heading</span>}>
  *   <MyContentComponent />
  * </Tab>
  * ```
  */
 export const Tab = props => props.children;
 
 /**
  * The container holding a number of tabs and the corresponding panels.
  *
  * Example:
  * ```
  * <TabContainer>
  *   <Tab header="Header 1">
  *     <MyContentComp text="Text 1"></MyContentComp>
  *   </Tab>
  *   <Tab header={<Dummy text="Header 2"></Dummy>}>
  *     <MyContentComp text="Text 2"></MyContentComp>
  *   </Tab>
  * </TabContainer>
  * ```
  */
 export const TabContainer = props => {
   const {seletedTabIndex = 0, id = 'tab', label = ''} = props;
   let {children = []} = props;
 
   const [selectedIndex, setSelectedIndex] = useState(seletedTabIndex);
 
   const headers = [],
     content = [];
 
   if (typeof children === 'object' && !Array.isArray(children)) {
     children = [children];
   }
 
   children.forEach((tab, index) => {
     const {header = '', id: tabId = index} = tab.props;
     /* Using array indices as key when key is not provided. */
     headers.push(
       <button
         type="button"
         key={tabId}
         id={`${id}-${tabId}`}
         disabled={tab.props.disabled}
         aria-controls={`${id}panel-${tabId}`}
         className={`TabContainer__TabHeader ${index === selectedIndex ? 'selected' : ''}`}
         role="tab"
         aria-selected={index === selectedIndex}
         aria-disabled={tab.props.disabled}
         onClickCapture={event => {
           setSelectedIndex(index);
           event.stopPropagation();
         }}
       >
         {header}
       </button>
     );
 
     /* Having all nodes present in DOM and hiding with CSS is faster than removing and re-adding.
      * This also avoids re-rendering the components on tab change.
      */
     content.push(
       <div
         key={tabId}
         id={`${id}panel-${tabId}`}
         data-testid={`${id}panel-${tabId}`}
         role="tabpanel"
         tabIndex="0"
         aria-labelledby={`${id}-${tabId}`}
         className={`TabContainer__TabContent ${index === selectedIndex ? 'selected' : ''}`}
       >
         {tab}
       </div>
     );
   });
 
   return (
     <Styled css={css} id="TabContainer">
       <div id={id} className="TabContainer">
         <div className="TabContainer__TabHeaders" role="tablist" aria-label={label}>
           {headers}
           {children.length > 0 && <div className="TabContainer__TabHeader"></div>}
         </div>
         <div className="TabContainer__TabContents">{content}</div>
       </div>
     </Styled>
   );
 };
 