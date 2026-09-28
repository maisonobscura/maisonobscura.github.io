function About() {
  return (
    <section className="section about" id="about">

      <div className="section__head">

        <div className="section__number">
          01
        </div>

        <h2 className="section__title">
          Обо мне
        </h2>

      </div>

      <div className="about__grid">

        <div className="about__text">

          <p>
            Я занимаюсь SMM и контентом: от идеи
            и стратегии до публикации, монтажа
            и анализа результатов.
          </p>

          <p>
            За время работы успел поработать
            с музыкальным проектом, компьютерным
            клубом и интернет-магазином.
          </p>

          <p>
            Мне нравится не просто делать контент,
            а разбираться, зачем он нужен бизнесу
            и какой результат должен давать.
          </p>

        </div>

        <div className="about__photo">

          <img
            src="img/me.jpg"
            alt="Евгений"
          />

        </div>

        <div className="about__facts">

          <div className="fact">
            <div className="fact__label">
              Формат работы
            </div>

            <div className="fact__value">
              Удалённо / гибрид / в офисе
            </div>
          </div>

          <div className="fact">
            <div className="fact__label">
              Основные платформы
            </div>

            <div className="fact__value">
              VK / Telegram / TikTok
            </div>
          </div>

          <div className="fact">
            <div className="fact__label">
              Работаю с
            </div>

            <div className="fact__value">
              Контентом / визуалом / аналитикой
            </div>
          </div>

          <div className="fact">
            <div className="fact__label">
              Дополнительно
            </div>

            <div className="fact__value">
              HTML / CSS / JavaScript
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About
