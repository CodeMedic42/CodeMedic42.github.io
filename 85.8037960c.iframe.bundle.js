"use strict";(self.webpackChunk_reformjs_reactive_storybook=self.webpackChunk_reformjs_reactive_storybook||[]).push([[85],{"../reactive/lib/components/arrangement/infinite-list/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.InfiniteListItems=void 0;const infinite_list_1=__importDefault(__webpack_require__("../reactive/lib/components/arrangement/infinite-list/infinite-list.js")),infinite_list_items_1=__importDefault(__webpack_require__("../reactive/lib/components/arrangement/infinite-list/infinite-list-items.js"));exports.InfiniteListItems=infinite_list_items_1.default,exports.default=infinite_list_1.default},"../reactive/lib/components/arrangement/infinite-list/infinite-list-context.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const InfiniteListContext=(0,__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js").createContext)();exports.default=InfiniteListContext},"../reactive/lib/components/arrangement/infinite-list/infinite-list-items.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),classnames_1=__importDefault(__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js")),get_1=__importDefault(__webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js")),isNil_1=__importDefault(__webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js")),infinite_list_context_1=__importDefault(__webpack_require__("../reactive/lib/components/arrangement/infinite-list/infinite-list-context.js")),prop_types_1=__importDefault(__webpack_require__("../reactive/lib/common/prop-types.js"));function InfiniteListItems(props){const{className,items,render,Component}=props,rest=__rest(props,["className","items","render","Component"]),context=(0,react_1.useContext)(infinite_list_context_1.default),{itemsRef}=context;return react_1.default.createElement(Component,Object.assign({ref:itemsRef,className:(0,classnames_1.default)("ra-infinite-list-items",className)},rest),function load(collection,context,cb){const{minIndexes,maxIndexes,fromIndexes,fromCount,toCount}=context,arr=[],currentIndexes=[...fromIndexes];for(let counter=fromCount;counter<toCount;counter+=1){let done=!1;const item=(0,get_1.default)(collection,currentIndexes);arr.push(cb(item,currentIndexes,counter));let index=currentIndexes.length-1;for(;!done;)if(index<0){if(counter<=toCount)throw new Error("Should not happen");done=!0}else currentIndexes[index]+=1,!(0,isNil_1.default)(maxIndexes[index])&&currentIndexes[index]>maxIndexes[index]?(currentIndexes[index]=minIndexes[index],index-=1):done=!0}return arr}(items,context,((item,index,count)=>react_1.default.createElement(react_1.Fragment,{key:count},render(item,index)))))}InfiniteListItems.propTypes={className:prop_types_1.default.string,Component:prop_types_1.default.Component,items:prop_types_1.default.arrayOf(prop_types_1.default.any),render:prop_types_1.default.func.isRequired},InfiniteListItems.defaultProps={className:null,items:null,Component:"div"},exports.default=InfiniteListItems},"../reactive/lib/components/arrangement/infinite-list/infinite-list.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),classnames_1=__importDefault(__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js")),isNil_1=__importDefault(__webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js")),isNumber_1=__importDefault(__webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNumber.js")),scroll_into_view_if_needed_1=__importDefault(__webpack_require__("../../node_modules/.pnpm/scroll-into-view-if-needed@3.0.10/node_modules/scroll-into-view-if-needed/dist/index.cjs")),isFinite_1=__importDefault(__webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFinite.js")),prop_types_1=__importDefault(__webpack_require__("../reactive/lib/common/prop-types.js")),use_throttle_callback_1=__importDefault(__webpack_require__("../reactive/lib/hooks/use-throttle-callback.js")),infinite_list_context_1=__importDefault(__webpack_require__("../reactive/lib/components/arrangement/infinite-list/infinite-list-context.js"));function getIndexCount(count,value,multiplier){return(0,isNil_1.default)(count)||(0,isNil_1.default)(value)?null:value*multiplier+count}function calculateIndexes(count,multipliers,minIndexes){let currentCount=count;const indexes=[];for(let counter=0;counter<multipliers.length;counter+=1){const multiplier=multipliers[counter],remainder=currentCount%multiplier;indexes[counter]=(currentCount-remainder)/multiplier,currentCount=remainder,indexes[counter]+=minIndexes[counter]}return indexes}const InfiniteList=(0,react_1.forwardRef)(((props,ref)=>{const{id,className,Component,children,minIndex,maxIndex,firstIndex,lastIndex,startingIndex,onLoad,loadCount,bufferCount,items,hold,keepLoaded,onTopIndexChange,topOffset}=props,rest=__rest(props,["id","className","Component","children","minIndex","maxIndex","firstIndex","lastIndex","startingIndex","onLoad","loadCount","bufferCount","items","hold","keepLoaded","onTopIndexChange","topOffset"]);if((0,isNil_1.default)(Component))throw new Error("The Component prop MUST be a valid type");if(loadCount<bufferCount)throw new Error("Please set loadCount to a value greater than bufferCount");const{minIndexes,maxIndexes,startingIndexes,multipliers,firstCount,startingCount,lastCount}=(0,react_1.useMemo)((()=>function validateIndexes(minIndex,maxIndex,firstIndex,lastIndex,startingIndex){let minIndexes=null,maxIndexes=null,firstIndexes=null,lastIndexes=null,startingIndexes=null;if(minIndexes=(0,isNil_1.default)(minIndex)?[0]:(0,isFinite_1.default)(minIndex)?[minIndex]:[...minIndex],maxIndexes=(0,isNil_1.default)(maxIndex)?[null]:(0,isFinite_1.default)(maxIndex)?[maxIndex]:[...maxIndex],firstIndexes=(0,isNil_1.default)(firstIndex)?[...minIndexes]:(0,isFinite_1.default)(firstIndex)?[firstIndex]:[...firstIndex],lastIndexes=(0,isNil_1.default)(lastIndex)?[...maxIndexes]:(0,isFinite_1.default)(lastIndex)?[lastIndex]:[...lastIndex],startingIndexes=(0,isNil_1.default)(startingIndex)?[...firstIndexes]:(0,isFinite_1.default)(startingIndex)?[startingIndex]:[...startingIndex],minIndexes.length<maxIndexes.length)for(let counter=minIndexes.length;counter<maxIndexes.length;counter+=1)minIndexes.push(0);if(minIndexes.length>maxIndexes.length)throw new Error("When using multi-dimensional arrays minIndex/maxIndex/startingIndex/firstIndex/lastIndex must have the same length");if(firstIndexes.length>minIndexes.length)throw new Error("When using multi-dimensional arrays minIndex/maxIndex/startingIndex/firstIndex/lastIndex must have the same length");if(lastIndexes.length>maxIndexes.length)throw new Error("When using multi-dimensional arrays minIndex/maxIndex/startingIndex/firstIndex/lastIndex must have the same length");if(startingIndexes.length>firstIndexes.length)throw new Error("When using multi-dimensional arrays minIndex/maxIndex/startingIndex/firstIndex/lastIndex must have the same length");const{length}=minIndexes,adjMinIndexes=[],adjFirstIndexes=[],adjStartingIndexes=[],adjLastIndexes=[],adjMaxIndexes=[];for(let counter=0;counter<length;counter+=1){let minIndexValue=minIndexes[counter];const maxIndexValue=maxIndexes[counter];let firstIndexValue=firstIndexes[counter],lastIndexValue=lastIndexes[counter],startingValue=startingIndexes[counter];if((0,isNil_1.default)(minIndexValue))minIndexValue=0,minIndexes[counter]=minIndexValue;else if(minIndexValue<0)throw new Error("minIndexes cannot be less than 0");if((0,isNil_1.default)(firstIndexValue)&&(firstIndexValue=minIndexValue,firstIndexes[counter]=firstIndexValue),(0,isNil_1.default)(startingValue)&&(startingValue=firstIndexValue,startingIndexes[counter]=startingValue),(0,isNil_1.default)(lastIndexValue)&&(lastIndexValue=maxIndexValue,lastIndexes[counter]=lastIndexValue),counter>0&&(0,isNil_1.default)(maxIndexValue))throw new Error("Only the first index in maxIndex can be null");adjMinIndexes[counter]=0,adjMaxIndexes[counter]=(0,isNil_1.default)(maxIndexValue)?null:maxIndexValue-minIndexValue,adjFirstIndexes[counter]=firstIndexValue-minIndexValue,adjLastIndexes[counter]=(0,isNil_1.default)(lastIndexValue)?null:lastIndexValue-minIndexValue,adjStartingIndexes[counter]=startingValue-minIndexValue}let multiplier=1;const multipliers=[1];let minCount=adjMinIndexes[length-1],firstCount=adjFirstIndexes[length-1],startingCount=adjStartingIndexes[length-1],lastCount=adjLastIndexes[length-1],maxCount=adjMaxIndexes[length-1];for(let counter=length-2;counter>=0;counter-=1)multiplier*=adjMaxIndexes[counter+1]+1,multipliers.unshift(multiplier),minCount=getIndexCount(minCount,adjMinIndexes[counter],multiplier),firstCount=getIndexCount(firstCount,adjFirstIndexes[counter],multiplier),startingCount=getIndexCount(startingCount,adjStartingIndexes[counter],multiplier),lastCount=getIndexCount(lastCount,adjLastIndexes[counter],multiplier),maxCount=getIndexCount(maxCount,adjMaxIndexes[counter],multiplier);if(minCount>firstCount)throw new Error("minIndex must be less than or equal to firstIndex");if(firstCount>startingCount)throw new Error("firstIndex must be less than or equal to startingIndex");if((0,isNil_1.default)(lastCount)){if(!(0,isNil_1.default)(maxCount)&&startingCount>maxCount)throw new Error("startingIndex must be less than or equal to maxIndex")}else{if(startingCount>lastCount)throw new Error("startingIndex must be less than or equal to lastIndex");if(!(0,isNil_1.default)(maxCount)&&lastCount>maxCount)throw new Error("lastIndex must be less than or equal to maxIndex")}return{minIndexes,maxIndexes,startingIndexes,multipliers,firstCount,startingCount,lastCount}}(minIndex,maxIndex,firstIndex,lastIndex,startingIndex)),[minIndex,maxIndex,firstIndex,lastIndex,startingIndex]),scrollToRef=(0,react_1.useRef)(null),loading=(0,react_1.useRef)(!1),listRef=(0,react_1.useRef)(),itemsRef=(0,react_1.useRef)(),topOffsetRef=(0,react_1.useRef)(0),shiftInfoRef=(0,react_1.useRef)(null);loading.current=!1;const[data,setData]=(0,react_1.useState)({itemsRef,fromCount:startingCount,toCount:startingCount,fromIndexes:startingIndexes,toIndexes:startingIndexes,minIndexes,maxIndexes});(0,react_1.useLayoutEffect)((()=>{if((0,isNil_1.default)(shiftInfoRef.current)||(0,isNil_1.default)(itemsRef.current))return;const{previousPosition,targetIndex}=shiftInfoRef.current,item=itemsRef.current.childNodes[targetIndex];if((0,isNil_1.default)(item))throw new Error("Cannot find child to shift to.");const itemRect=item.getBoundingClientRect(),scrollTop=listRef.current.scrollTop-(previousPosition-itemRect.top);listRef.current.scrollTop=scrollTop,shiftInfoRef.current=null})),(0,react_1.useLayoutEffect)((()=>{if(topOffsetRef.current=function getTopOffset(topOffset,listRef,itemsRef){if((0,isNumber_1.default)(topOffset))return topOffset;if(topOffset){const itemsRect=itemsRef.current.getBoundingClientRect();return Math.round(listRef.current.scrollHeight-itemsRect.height)}return 0}(topOffset,listRef,itemsRef),(0,isNil_1.default)(scrollToRef.current)||(0,isNil_1.default)(itemsRef.current))return;const targetChild=itemsRef.current.childNodes[scrollToRef.current-data.fromCount];(0,scroll_into_view_if_needed_1.default)(targetChild,{scrollMode:"always",block:"start",inline:"start",boundary:listRef.current}),listRef.current.scrollTop-=topOffsetRef.current,scrollToRef.current=null}));const review=(0,react_1.useCallback)((()=>{if(loading.current||hold)return;loading.current=!0;let{fromIndexes,toIndexes,fromCount,toCount}=data;(0,isNil_1.default)(startingIndex)||fromCount!==toCount||(scrollToRef.current=fromCount);const{count:beforeCount}=function getNumberChildrenBefore(parent,itemsContainer,topOffset,getTopIndex){let count=0,visibleIndex=null;if(itemsContainer.childNodes.length>0){const parentRect=parent.getBoundingClientRect();for(;itemsContainer.childNodes[count].getBoundingClientRect().bottom<parentRect.top+topOffset;)count+=1;if(getTopIndex){const firstVisible=count,visible=itemsContainer.childNodes[firstVisible];if(!(0,isNil_1.default)(visible)){const visibleRect=visible.getBoundingClientRect(),visibleDiff=visibleRect.bottom-(parentRect.top+topOffset);visibleIndex=visibleRect.height/2<visibleDiff||(0,isNil_1.default)(itemsContainer.childNodes[count+2])?firstVisible:firstVisible+1}}}return{count,visibleIndex}}(listRef.current,itemsRef.current,topOffsetRef.current,!(0,isNil_1.default)(onTopIndexChange)),afterCount=function getNumberChildrenAfter(parent,itemsContainer){if(itemsContainer.childNodes.length<=0)return 0;let count=itemsContainer.childNodes.length;const parentRect=parent.getBoundingClientRect();for(;count>0&&itemsContainer.childNodes[count-1].getBoundingClientRect().top>parentRect.bottom;)count-=1;return itemsContainer.childNodes.length-count}(listRef.current,itemsRef.current);let loadStart=fromIndexes,loadEnd=toIndexes;const offLoadCount=bufferCount+loadCount;let modified=!1;if(afterCount<bufferCount){let newCount=toCount+loadCount;!(0,isNil_1.default)(lastCount)&&newCount>lastCount+1&&(newCount=lastCount+1),newCount!==toCount&&(toIndexes=calculateIndexes(newCount-1,multipliers,minIndexes),loadEnd=toIndexes,toCount=newCount,modified=!0)}if(!keepLoaded&&afterCount>offLoadCount){let newCount=toCount-(afterCount-loadCount);newCount<firstCount&&(newCount=firstCount),newCount!==toCount&&(toIndexes=calculateIndexes(newCount-1,multipliers,minIndexes),loadEnd=toIndexes,toCount=newCount,modified=!0)}if(beforeCount<bufferCount){let newCount=fromCount-loadCount;if(newCount<firstCount&&(newCount=firstCount),newCount!==fromCount){if(fromIndexes=calculateIndexes(newCount,multipliers,minIndexes),loadStart=fromIndexes,listRef.current.scrollTop<1){const item=itemsRef.current.childNodes[0];if(!(0,isNil_1.default)(item)){const itemRect=item.getBoundingClientRect();shiftInfoRef.current={previousPosition:itemRect.top,targetIndex:loadCount}}}fromCount=newCount,modified=!0}}if(!keepLoaded&&beforeCount>offLoadCount){let newCount=fromCount+(beforeCount-loadCount);!(0,isNil_1.default)(lastCount)&&newCount>lastCount+1&&(newCount=lastCount+1),newCount!==fromCount&&(fromIndexes=calculateIndexes(newCount,multipliers,minIndexes),loadStart=fromIndexes,fromCount=newCount,modified=!0)}modified?(!(0,isNil_1.default)(onLoad)&&fromCount<toCount&&onLoad(loadStart,loadEnd),setData({fromIndexes,toIndexes,fromCount,toCount,itemsRef,minIndexes,maxIndexes})):loading.current=!1}),[data,bufferCount,loadCount,onLoad,hold,keepLoaded,multipliers,firstCount,lastCount,minIndexes,maxIndexes,onTopIndexChange,startingIndex]);(0,react_1.useEffect)(review,[review]);const handleScroll=(0,use_throttle_callback_1.default)(review,[review],200,{leading:!1});return(0,react_1.useImperativeHandle)(ref,(()=>({gotoIndex:gotoIndex=>{let targetCount=0,targetIndexes=gotoIndex;if(targetIndexes=(0,isNil_1.default)(targetIndexes)?[0]:(0,isFinite_1.default)(targetIndexes)?[targetIndexes]:[...targetIndexes],targetIndexes.length!==maxIndexes.length)throw new Error("gotoIndex must have same length as maxIndex");for(let counter=0;counter<targetIndexes.length;counter+=1){const multiplier=multipliers[counter],minIndexValue=minIndexes[counter],targetIndexValue=targetIndexes[counter];if((0,isNil_1.default)(targetIndexValue))throw new Error("gotoIndex values cannot be nil.");targetCount+=getIndexCount(targetCount,targetIndexValue-minIndexValue,multiplier)*multiplier}if(targetCount<firstCount)throw new Error("gotoIndex must be greater than or equal to firstIndex. If firstIndex has not been provided then it is calculated off of minIndex.");if(!(0,isNil_1.default)(lastCount)&&targetCount>lastCount)throw new Error("gotoIndex must be less than or equal to lastIndex. If lastIndex has not been provided then it is calculated off of maxIndex.");setData({fromIndexes:targetIndexes,toIndexes:targetIndexes,fromCount:targetCount,toCount:targetCount,itemsRef,minIndexes,maxIndexes})}})),[multipliers,minIndexes,maxIndexes,firstCount,lastCount]),react_1.default.createElement(Component,Object.assign({},rest,{ref:listRef,id,className:(0,classnames_1.default)("ra-infinite-list",className),onScroll:handleScroll}),react_1.default.createElement(infinite_list_context_1.default.Provider,{value:data},children))}));InfiniteList.displayName="InfiniteList";const countingPropType=prop_types_1.default.oneOfType([prop_types_1.default.number,prop_types_1.default.arrayOf(prop_types_1.default.number)]);InfiniteList.propTypes={id:prop_types_1.default.string,className:prop_types_1.default.string,Component:prop_types_1.default.Component,children:prop_types_1.default.children,firstIndex:countingPropType,lastIndex:countingPropType,minIndex:countingPropType,maxIndex:countingPropType,startingIndex:countingPropType,onLoad:prop_types_1.default.func,loadCount:prop_types_1.default.number.isRequired,bufferCount:prop_types_1.default.number.isRequired,items:prop_types_1.default.arrayOf(prop_types_1.default.any),hold:prop_types_1.default.bool,keepLoaded:prop_types_1.default.bool,onTopIndexChange:prop_types_1.default.func,topOffset:prop_types_1.default.oneOfType([prop_types_1.default.number,prop_types_1.default.bool])},InfiniteList.defaultProps={id:null,className:null,Component:"div",children:null,firstIndex:null,lastIndex:null,minIndex:null,maxIndex:null,startingIndex:null,items:null,hold:!1,keepLoaded:!1,onLoad:null,onTopIndexChange:null,topOffset:0},exports.default=InfiniteList},"../reactive/lib/hooks/use-throttle-callback.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),isNil_1=__importDefault(__webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js")),throttle_1=__importDefault(__webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js"));exports.default=function useThrottleCallback(cb,dep,wait,options){const old=(0,react_1.useRef)();return(0,react_1.useMemo)((()=>{(0,isNil_1.default)(old.current)||old.current.cancel();const t=(0,throttle_1.default)(cb,wait,options);return old.current=t,t}),dep)}}}]);