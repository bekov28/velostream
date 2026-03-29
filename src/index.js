import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

//Create the client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, //Data stays 'fresh' for 1h
      gcTime: 1000 * 60 * 60 * 24, //Keeps data in LocalStorage for 1 day
      // Disable automatic refetching to save more quota
      refetchOnWindowFocus: false, // Don't refetch when clicking back into the tab
      refetchOnMount: false, // Don't refetch if the component unmounts/remounts
      retry: 1, // Only retry failed requests once
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* DevTools helps see the cache in the browser */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
