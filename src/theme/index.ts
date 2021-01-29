import _ from 'lodash'
import {
  colors,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core'
import { THEMES } from '../constants'
import { softShadows, strongShadows } from './shadows'
import typography from './typography'

interface Theme {
  theme: string;
  responsiveFontSizes?: boolean;
  direction?: string
}

export type ThemeOptions ={
  name?: string;
  overrides?: {};
  direction?: any;
  palette?: any;
  shadows?: any;
  typography?: any;
}

const baseOptions: ThemeOptions = {
  direction: 'ltr',
  typography,
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: 10,
        '&$focused': {
          '& fieldset': {
            borderColor: '#80868c !important',
          }
        }
      }
    },
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiListSubheader: {
      root: {
        lineHeight: '1.6',
        paddingTop: 13,
        paddingBottom: 13
      }
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    }
  }
}

const themesOptions: Array<ThemeOptions> = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      }
    },
    palette: {
      type: 'light',
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white
      },
      primary: {
        main: '#1fa99a'
      },
      secondary: {
        main: '#318657'
      },
      text: {
        primary: '#333E4B',
        secondary: '#80868c'
      },
    },
    shadows: softShadows
  },
  {
    name: THEMES.DARK,
    palette: {
      type: 'dark',
      background: {
        default: '#0f1217',
        dark: '#1c2025',
        paper: '#0f1217'
      },
      primary: {
        main: '#1fa99a'
      },
      secondary: {
        main: '#318657'
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb'
      },
    },
    shadows: strongShadows
  }
]

const defaultP = {
  theme: 'light'
}

// eslint-disable-next-line import/prefer-default-export
export const createTheme = (config: Theme = defaultP) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme)

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions
  }

  let theme = createMuiTheme(
    _.merge(
      {},
      baseOptions,
      themeOptions,
      { direction: config.direction }
    )
  )

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return theme
}
