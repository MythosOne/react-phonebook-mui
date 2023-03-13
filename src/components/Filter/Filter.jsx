import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { TitleFilter, ContainerFilter, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <ContainerFilter>
      <TitleFilter>Find contacts by name</TitleFilter>
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value))}
        placeholder="Enter Name"
      />
    </ContainerFilter>
  );
};
