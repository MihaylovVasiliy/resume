import React from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import options from "./assets/options";
import './App.css';

function App() {
    return (
        <div className="wrapper">
            <SectionsContainer {...options}>
                <Section className='info-main'>
                    <img
                        src="https://image.flaticon.com/icons/png/512/97/97895.png"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <h1>
                        Junior Frontend-Developer
                    </h1>

                    <h2>
                        Михайлов Василий
                    </h2>

                    <p>
                        HTML/CSS | JavaScript | React
                    </p>
                    <div className="social-links">
                        <i className="fa fa-github-square fa-lg" aria-hidden="true"/>
                        <a href="https://github.com/MihaylovVasiliy">
                            GITHUB
                        </a>
                        <i className="fa fa-free-code-camp fa-lg" aria-hidden="true"/>
                        <a href="https://www.freecodecamp.org/vasily">
                            FREE CODE CAMP
                        </a>
                        <i className="fa fa-youtube fa-lg" aria-hidden="true"/>
                        <a href="https://www.youtube.com/channel/UCoh6D3PtNG3-2go6-aohkHA?view_as=subscriber">
                            YouTube
                        </a>
                    </div>
                </Section>

                <Section className='info-education'>
                    <h1>Приветствую, я Михайлов Василий</h1>
                    <h2>Места моего обучения:</h2>
                    <p>Гимназия с. Малая Пурга (2005-2016)</p>
                    <p> ИжГТУ им. М.Т. Калашникова, "Мехатроника и Робототехника" (Академический отпуск)</p>
                    <p> Курсы по Frontend-разработке Dexsys IT</p>
                </Section>

                <Section className='info-qualities'>
                    <h2>Кстати, я обладаю полезными для работы в команде навыками:</h2>
                    <p>Трудолюбие</p>
                    <p>Обучаемость</p>
                    <p>Стрессоустойчивость</p>
                    <p>Ответственность</p>
                    <p>Доведение дел до конца</p>
                </Section>

                <Section className='info-connect'>
                    <div className='info-table'>
                        <h2> Как же со мной связаться? </h2>
                        <div className='icons-phone'>
                            <i className="fa fa-whatsapp fa-lg" aria-hidden="true"/>
                            <i className="fa fa-telegram fa-lg" aria-hidden="true"/>
                            <i className="fa fa-phone fa-lg" aria-hidden="true"/>
                        </div>
                        <p> +7(950)810-27-37 </p>
                        <i className="fa fa-envelope-o fa-lg" aria-hidden="true"/>
                        <p> basen3012@gmail.com </p>
                    </div>
                </Section>
            </SectionsContainer>
        </div>
    );
}

export default App;

