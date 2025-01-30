import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { Typography } from '@mui/material';
import {
  ContainerFilter,
  StyledTextField
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <ContainerFilter>
      <Typography variant="h5" fontWeight="400" color="white">
        Find contacts by name
      </Typography>
      <StyledTextField
        fullWidth
        type="text"
        label="Enter Name"
        variant="filled"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </ContainerFilter>
  );
};
