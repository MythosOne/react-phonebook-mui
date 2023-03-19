import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ContainerFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const CssTextField = styled(TextField)({
    '& input': {
      fontSize: '20px',
    },
    '& label': {
      fontSize: '20px',
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
      fontWeight: '400',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  });

  return (
    <ContainerFilter>
      <Typography variant="h5" fontWeight="400" color="white">
        Find contacts by name
      </Typography>
      <CssTextField
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
