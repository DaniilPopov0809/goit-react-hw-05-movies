import { AiFillHome } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { NavList, LinkWrap, NavItem, LinkNav} from './Navigation.styled'

const Navigation = () => {
    return (
        <NavList>
<NavItem>
  <LinkNav to="/">
    <AiFillHome />
    <LinkWrap>Home</LinkWrap>
  </LinkNav>
</NavItem>
<NavItem>
  <LinkNav to="/movies">
    <MdLocalMovies />
    <LinkWrap>Movies</LinkWrap>
  </LinkNav>
</NavItem>
</NavList>
    )

}

export default Navigation;