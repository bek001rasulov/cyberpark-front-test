import { LoadingOverlay } from '@mantine/core';
import React, {ReactNode} from 'react';
import {Navigate, useLocation} from 'react-router-dom'

interface IProps {
    children: ReactNode
}

export const HocPrivate = ({children}:IProps) => {
    const user = localStorage.getItem('token');

    if (!user) {
        return <Navigate to='/auth'/>
    }


    return (
        <React.Suspense fallback={<LoadingOverlay visible={true} />}>
        <>{children}</>
        </React.Suspense>
    )
};

