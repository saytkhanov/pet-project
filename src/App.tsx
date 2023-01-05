import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme, ''])}>
            <button onClick={toggleTheme}>-</button>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>

                    <Route path={'/'} element={<MainPageAsync />} />
                    </Routes>
                </Suspense>
        </div>
    );
};

export default App;