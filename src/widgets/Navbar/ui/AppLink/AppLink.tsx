import { FC } from "react";
import {classNames} from "helpers/classNames";
import { Link } from "react-router-dom";
import cls from './AppLink.module.scss';
import { LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
};

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps} = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
           {children}
        </Link>
    );
};