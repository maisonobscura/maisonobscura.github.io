function Hero() {
  return (
    <section className="hero">

      <div className="hero__content">

        <div className="hero__top">
          <span className="hero__label">
            SMM / CONTENT / FRONTEND
          </span>

          <span className="hero__location">
            Вологда — 2026
          </span>
        </div>

        <div className="hero__main">

          <div className="hero__left">

            <h1 className="hero__title">
              Создаю контент,
              <br />
              который работает
            </h1>

            <div className="hero__bottom">

              <p className="hero__description">
                SMM-специалист и проджект-менеджер.
                Стратегия, визуал, тексты и продвижение
                проектов от идеи до результата.
              </p>

              <div className="hero__buttons">
                <a href="#works" className="btn btn--primary">
                  Смотреть работы
                </a>

                <a href="#contacts" className="btn btn--secondary">
                  Связаться
                </a>
              </div>

            </div>

          </div>

          <div className="hero__skills">

            <div className="hero__skills-label">
              CORE SKILLS / 2026
            </div>

            <div className="radar">

              <svg
                className="radar__svg"
                viewBox="0 0 400 400"
                aria-hidden="true"
              >

                {/* Сетка */}
                <polygon
                  points="200,55 325,127 325,273 200,345 75,273 75,127"
                  className="radar__grid"
                />

                <polygon
                  points="200,90 295,145 295,255 200,310 105,255 105,145"
                  className="radar__grid"
                />

                <polygon
                  points="200,125 265,162 265,238 200,275 135,238 135,162"
                  className="radar__grid"
                />

                <polygon
                  points="200,160 235,180 235,220 200,240 165,220 165,180"
                  className="radar__grid"
                />

                {/* Оси */}
                <line x1="200" y1="55" x2="200" y2="345" className="radar__axis" />
                <line x1="75" y1="127" x2="325" y2="273" className="radar__axis" />
                <line x1="75" y1="273" x2="325" y2="127" className="radar__axis" />

                {/* Skill polygon */}
                <polygon
                  points="
                    200,68
                    313,135
                    310,264
                    200,310  
                    126,243
                    135,162
                  "
                  className="radar__skill"
                />

                {/* Точки */}
                <circle cx="200" cy="68" r="4" className="radar__point" />
                <circle cx="313" cy="135" r="4" className="radar__point" />
                <circle cx="310" cy="264" r="4" className="radar__point" />
                <circle cx="200" cy="310" r="4" className="radar__point" />
                <circle cx="126" cy="243" r="4" className="radar__point" />
                <circle cx="135" cy="162" r="4" className="radar__point" />

              </svg>

              <span className="radar__label radar__label--top">
                SMM
              </span>

              <span className="radar__label radar__label--right-top">
                КОНТЕНТ
              </span>

              <span className="radar__label radar__label--right-bottom">
                ВИДЕО
              </span>

              <span className="radar__label radar__label--bottom">
                ДИЗАЙН
              </span>

              <span className="radar__label radar__label--left-bottom">
                АНАЛИТИКА
              </span>

              <span className="radar__label radar__label--left-top">
                WEB
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero
