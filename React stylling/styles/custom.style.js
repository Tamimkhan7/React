import styled from 'styled-components';
import Title from '../Component/Title';

export const styleTitle = styled(Title)`

color: &{(props)=> props.color};
`;
