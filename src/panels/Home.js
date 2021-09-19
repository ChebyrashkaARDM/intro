import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, RichCell, Caption, Footer } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Греча с сосиской</PanelHeader>
		<Caption style={{ paddingTop: 20, paddingBottom: 20, textAlign: 'center' }}>
				Дебютное выступление нашей команды на хакатоне "Вездекод"
		</Caption>

		<Caption style={{ paddingTop: 20, paddingLeft: 20 }}>
				Очень кратко о нас:
		</Caption>

		<Group header={<Header mode="secondary">Fullstack-разработчик</Header>}>
			<Div>
				<RichCell
    				disabled
    				multiline
        			before={<Avatar size={72} src="https://sun9-22.userapi.com/impf/c852016/v852016022/64f4d/z5Uk_HwkZRU.jpg?size=1500x1124&quality=96&sign=cf644df8def3b6ae924df310219d9277&type=album" />}
        			caption="студент"
      			>
		  			Червяков Александр
      			</RichCell>
			</Div>
		</Group>

		<Group header={<Header mode="secondary">Web-разработчик</Header>}>
			<Div>
				<RichCell
    				disabled
    				multiline
        			before={<Avatar size={72} src="https://sun9-23.userapi.com/impg/m7l-azREtGf6S-zsa6BBAJq-4QzhaezuukuuLQ/q5RhbmGTtBQ.jpg?size=636x636&quality=96&sign=ede1cf7388f9465f9fe4728d08fdca55&type=album" />}
        			caption="фрилансер"
      			>
		  			Червякова Мария
      			</RichCell>
			</Div>
		</Group>

		<Group header={<Header mode="secondary">ML-специалист</Header>}>
			<Div>
			<RichCell
    				disabled
    				multiline
        			before={<Avatar size={72} src="https://sun9-2.userapi.com/impg/Wu7CmvuBDRtSDmmsPzgV_WYY1F7YY7jVP4fd9g/_1ADF_3HI3Q.jpg?size=1080x1351&quality=96&sign=908b860fb2b4328d6e3aa1c60d5d10bc&type=album" />}
        			caption="фрилансер"
      			>
		  			Кузина Катерина
      			</RichCell>
			</Div>
		</Group>

		<Group header={<Header mode="secondary">Дизайнер</Header>}>
			<Div>
			<RichCell
    				disabled
    				multiline
        			before={<Avatar size={72} src="https://sun9-17.userapi.com/impg/4d91_0PNt0qkpbyT54l-K1XOySROJtcSDykIZw/ekhajw0ma_0.jpg?size=500x265&quality=96&sign=d077da5ec985253d90bf333e76613ec0&type=album" />}
        			caption="школьник"
      			>
		  			Зарецкий Вячеслав
      			</RichCell>
			</Div>
		</Group>
		<Footer>сентябрь 2021</Footer>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
