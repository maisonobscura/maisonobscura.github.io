import { useEffect, useRef, useState } from "react"

function AnimatedNumber({ value, suffix = "" }) {
  const [number, setNumber] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        let start = 0
        const duration = 1400
        const startTime = performance.now()

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          )

          const ease = 1 - Math.pow(1 - progress, 3)

          start = Math.floor(value * ease)
          setNumber(start)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setNumber(value)
          }
        }

        requestAnimationFrame(animate)
        observer.disconnect()
      },
      {
        threshold: 0.4,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {number.toLocaleString("ru-RU")}
      {suffix}
    </span>
  )
}

function Results() {
  return (
    <section className="section results">

      <div className="section__head">

        <div className="section__number">
          02
        </div>

        <h2 className="section__title">
          Результаты
        </h2>

      </div>

      <div className="results__grid">

        <div className="result">

          <div className="result__number">
            <AnimatedNumber value={120000} />
          </div>

          <div className="result__title">
            прослушиваний в месяц
          </div>

          <div className="result__description">
            Рост музыкального проекта
            с 20 000 до 120 000 прослушиваний.
          </div>

        </div>

        <div className="result">

          <div className="result__number">
            <AnimatedNumber value={10000000} suffix="+" />
          </div>

          <div className="result__title">
            просмотров видео
          </div>

          <div className="result__description">
            Короткие видео стали одним
            из основных форматов продвижения.
          </div>

        </div>

        <div className="result">

          <div className="result__number">
            <AnimatedNumber value={30000} />
          </div>

          <div className="result__title">
            подписчиков
          </div>

          <div className="result__description">
            Рост сообщества интернет-магазина
            с 15 тысяч до 30 тысяч подписчиков.
          </div>

        </div>

        <div className="result">

          <div className="result__number">
            <AnimatedNumber value={100} suffix="+" />
          </div>

          <div className="result__title">
            клиентов
          </div>

          <div className="result__description">
            Первый месяц работы
            с компьютерным клубом.
          </div>

        </div>

      </div>

    </section>
  )
}

export default Results
