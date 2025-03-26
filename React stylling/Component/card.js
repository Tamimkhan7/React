import nerdImage from '../assets/image/illustration.png';
import Button from './Button';
import Content from './Content';
import Image from './Image';
import { Tag, H1, P, Image } from './styles/Element';
import { cardContainer, contentContainer, ButtonContainer } from '../styles/Container.styles';
import { styleTitle } from '../styles/custom.style';

export default function Card() {
    return (
        <cardContainer>
            < contentContainer>
                <Tag color="#4361ee">EXCLUSIVE</Tag>

                <H1><styleTitle text="React Styled Components" /></H1>
                <P>Exclusive React JS Tutorial on styled components where you will learn why me need this & how to use it.</P>

                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>

            </contentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
            <cardContainer>
                )
}