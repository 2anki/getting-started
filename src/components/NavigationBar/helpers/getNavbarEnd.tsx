import BecomeAPatron from '../../BecomeAPatron';
import NavbarItem from '../NavbarItem';
import { logout } from '../../../api/logout';

export default function getNavbarEnd(
  path: string,
) {
  const onLogOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    logout();
  };
  return (
    <div className="navbar-end">
      <NavbarItem href="/search" path={path}>
        🔍 Search
      </NavbarItem>
      <NavbarItem path={path} href="/users/logout" onClick={onLogOut}>
        🔒 log out
      </NavbarItem>
    </div>
  );
}
