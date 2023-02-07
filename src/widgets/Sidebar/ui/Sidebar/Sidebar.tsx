import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [open, setOpen] = useState(false)

    const onToggle = () => {
        setOpen(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: open}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

