import {classNames} from "helpers/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};

export default Navbar;