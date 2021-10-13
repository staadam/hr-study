import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { StyledNavigation, StyledTitle, StyledList, StyledLink, MenuButton } from './Navigation.styles';

export const Navigation = () => {
  const auth = useAuth();
  const [isOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <StyledNavigation isOpen={isOpen}>
        <StyledTitle>
          <span>Study</span>
          <span>Buddy</span>
        </StyledTitle>
        <StyledList>
          <li>
            <StyledLink to="/group" onClick={handleCloseMenu}>
              Dashboard
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/notes" onClick={handleCloseMenu}>
              Notes
            </StyledLink>
          </li>
          <li>
            <StyledLink className="news" to="/news" onClick={handleCloseMenu}>
              News
            </StyledLink>
          </li>
          <li>
            <StyledLink as="a" onClick={auth.signOut}>
              Logout
            </StyledLink>
          </li>
        </StyledList>
      </StyledNavigation>
      <MenuButton onClick={handleMenuToggle}>Menu</MenuButton>
    </>
  );
};
