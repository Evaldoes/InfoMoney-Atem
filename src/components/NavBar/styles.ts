import { Badge, BadgeProps, InputBase, TextField } from '@mui/material';
import styled from 'styled-components';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#EFF2F5',
  '&:hover': {
    backgroundColor: '#dcdcdd',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `40px`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '12ch',
      },
    },
  },
}));

export const BadgeNotification = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    width: 10,
    height: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#D8E0FD',
    borderRadius: '50%',
  },
}));
