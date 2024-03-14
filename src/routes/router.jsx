import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { SuspenseErrorBoundary } from "./SuspenseErrorBoundary";
//lazy imports
const Layout = lazy(() => import("../components/layout/Layout"));
const VirtualizedList = lazy(() => import("../components/virualizedList/Virtualizing"));
const VirtualizedAutoRowHeight = lazy(() => import("../components/virualizedList/AutoHeightVirtualizingList"));
const CollabesVirtualizedList = lazy(() => import("../components/virualizedList/CollabesVirtualizedList"));
const GridViartualizedList = lazy(() => import("../components/virualizedList/GridVirtualizedList"));
const SimpleList = lazy(() => import("../components/simpleList/SimpleList"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <SuspenseErrorBoundary>
            <Layout />
          </SuspenseErrorBoundary>
        }
      >
        <Route
          index
          element={
            <SuspenseErrorBoundary>
              <VirtualizedList />
            </SuspenseErrorBoundary>
          }
        />
        <Route
          path="/autorowheight"
          element={
            <SuspenseErrorBoundary>
              <VirtualizedAutoRowHeight />
            </SuspenseErrorBoundary>
          }
        />
        <Route
          path="/collabeslist"
          element={
            <SuspenseErrorBoundary>
              <CollabesVirtualizedList />
            </SuspenseErrorBoundary>
          }
        />
        <Route
          path="/gridlist"
          element={
            <SuspenseErrorBoundary>
              <GridViartualizedList />
            </SuspenseErrorBoundary>
          }
        />
        <Route
          path="/simplelist"
          element={
            <SuspenseErrorBoundary>
              <SimpleList />
            </SuspenseErrorBoundary>
          }
        />
      </Route>
    </>,
  ),
);

export default router;
