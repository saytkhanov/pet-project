import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "helpers/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme, ''])}>
            <Navbar />
            <AppRouter/>
        </div>
    );
};

export default App;