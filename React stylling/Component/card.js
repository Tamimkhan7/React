import nerdImage from '../assets/image/illustration.png';
import Button from './Button';
import Content from './Content';
import Image from './Image';
import Tag from './Tag';


export default function Card() {
    return (
        <div className="card">
            <content>
                <tag text="EXCLUSIVE" />
                <h1>React Styled components</h1>
                <p>
                    Exclusive React JS Tutorial on styled components where you will learn why me need this & how to use it.
                </p>

                <div className='buttons'>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </div>
            </content>
            <Image imgSrc={nerdImage} altTag="Nerd" width="300px" />
        </div>
    );
}