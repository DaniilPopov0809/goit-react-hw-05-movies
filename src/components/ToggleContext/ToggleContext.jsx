import Toggle from '../Toggle/Toggle';
import {
  ThemeContext,
  themes,
} from '../../contexts/ThemeContexts/ThemeContext';


 const ToggleContext = () => {

return (
<ThemeContext.Consumer>
          {({ theme, setTheme }) => (
             <Toggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            /> 
          )}
        </ThemeContext.Consumer> )
}

export default ToggleContext;