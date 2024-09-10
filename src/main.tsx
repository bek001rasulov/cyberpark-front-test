import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {queryClient} from "@/config/react-query.ts";
import {QueryClientProvider} from "@tanstack/react-query";
import {createTheme, LoadingOverlay, MantineProvider} from "@mantine/core";
import {ModalsProvider} from "@mantine/modals";
import {Notifications} from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import './index.css'


const theme = createTheme({
    /** Your theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme || undefined}>
                <React.Suspense fallback={<LoadingOverlay visible={true}/>}>
                    <ModalsProvider>
                        <Notifications position="top-right"/>
                        <App/>
                    </ModalsProvider>
                </React.Suspense>
            </MantineProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
