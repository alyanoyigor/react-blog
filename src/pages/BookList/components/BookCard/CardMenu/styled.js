import { Menu, styled } from '@mui/material';

export const StyledMenu = styled(Menu)(() => ({
  '& .MuiMenu-paper': {
    marginLeft: 4,
    maxWidth: 100,
    width: '100%',
    overflow: 'visible',
  },

  '& .MuiMenu-paper:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 20,
    left: -5,
    width: 10,
    height: 10,
    backgroundColor: 'white',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 0,
  },
}));
