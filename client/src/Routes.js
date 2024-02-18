
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Concepts from "./components/concepts/Concepts";
import SearchResults from "./components/SearchResults"
import IntroductionToReact from "./components/concepts/IntroductiontoReact";
import SettingUpTheDevelopmentEnvironment from "./components/concepts/SettingUptheDevelopmentEnvironment";
import JSXJavaScriptXML from "./components/concepts/JSX-JavaScriptXML";
import Components from "./components/concepts/Components";
import HandlingEvents from "./components/concepts/HandlingEvents";
import StateManagement from "./components/concepts/StateManagement";
import PropsVsState from "./components/concepts/Propsvs.State";
import RenderingLists from "./components/concepts/RenderingLists";
import ConditionalRendering from "./components/concepts/ConditionalRendering";
import FormsAndUserInput from "./components/concepts/FormsandUserInput";
import BasicHooks from "./components/concepts/BasicHooks";
import StylingAndCSS from "./components/concepts/StylingandCSS";
import BasicRouting from "./components/concepts/BasicRouting";
import CommunicatingWithAServer from "./components/concepts/CommunicatingwithaServer";
import AdvancedHooks from "./components/concepts/AdvancedHooks";
import AdvancedComponentPatterns from "./components/concepts/AdvancedComponentPatterns";
import StateManagementLibraries from "./components/concepts/StateManagementLibraries";
import PerformanceOptimization from "./components/concepts/PerformanceOptimization";
import RoutingAndNavigation from "./components/concepts/RoutingandNavigation";
import Testing from "./components/concepts/Testing";
import BuildAndDeployment from "./components/concepts/BuildandDeployment";
import NextJs from "./components/concepts/Next.js";
import AdditionalToolsAndLibraries from "./components/concepts/AdditionalToolsandLibraries";
import ReactPatternsAndBestPractices from "./components/concepts/ReactPatternsandBestPractices";

function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept" element={<Concepts />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/introduction-to-react" element={<IntroductionToReact />} />
        <Route path="/setting-up-the-development-environment" element={<SettingUpTheDevelopmentEnvironment />} />
        <Route path="/jsx-javascript-xml" element={<JSXJavaScriptXML />} />
        <Route path="/components" element={<Components />} />
        <Route path="/handling-events" element={<HandlingEvents />} />
        <Route path="/state-management" element={<StateManagement />} />
        <Route path="/props-vs-state" element={<PropsVsState />} />
        <Route path="/rendering-lists" element={<RenderingLists />} />
        <Route path="/conditional-rendering" element={<ConditionalRendering />} />
        <Route path="/forms-and-user-input" element={<FormsAndUserInput />} />
        <Route path="/basic-hooks" element={<BasicHooks />} />
        <Route path="/styling-and-css" element={<StylingAndCSS />} />
        <Route path="/basic-routing" element={<BasicRouting />} />
        <Route path="/communicating-with-a-server" element={<CommunicatingWithAServer />} />
        <Route path="/advanced-hooks" element={<AdvancedHooks />} />
        <Route path="/advanced-component-patterns" element={<AdvancedComponentPatterns />} />
        <Route path="/state-management-libraries" element={<StateManagementLibraries />} />
        <Route path="/performance-optimization" element={<PerformanceOptimization />} />
        <Route path="/routing-and-navigation" element={<RoutingAndNavigation />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/build-and-deployment" element={<BuildAndDeployment />} />
        <Route path="/next-js" element={<NextJs />} />
        <Route path="/additional-tools-and-libraries" element={<AdditionalToolsAndLibraries />} />
        <Route path="/react-patterns-and-best-practices" element={<ReactPatternsAndBestPractices />} />
      </Routes>
    </>
  );
}

export default Links;
