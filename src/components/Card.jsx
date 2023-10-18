import nerdImage from "../assets/images/illustration.png";
import Button from "./Button";
import {
	ButtonsContainer,
	CardContainer,
	ContentContainer,
} from "./styles/Container.styles";
import { StyledTitle } from "./styles/Custom.styles";
import { H1, Image, P, SubTitle } from "./styles/Elements.styles";

export default function Card() {
	return (
		<CardContainer>
			<ContentContainer>
				<SubTitle color="#4361ee">EXCLUSIVE</SubTitle>
				<H1>
					<StyledTitle text="React Styled Components" color="#fff" />
				</H1>
				<P>
					Exclusive React JS Tutorial on Styled Components where you will learn
					why we need this & how to use it.
				</P>
				<ButtonsContainer>
					<Button link="https://lwsbd.link/rsc" text="Watch now" />
					<Button link="https://lwsbd.link/react" text="Github repo" />
				</ButtonsContainer>
			</ContentContainer>
			<Image src={nerdImage} alt="Nerd" width="300px" />
		</CardContainer>
	);
}
