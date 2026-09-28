import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const works = [
  {
    id: 1,
    number: "01",
    label: "DARIO",
    name: "Продвижение артиста",
    type: "TikTok / Reels",
    categories: ["video", "social"],
    description:
      "Работа над продвижением исполнителя. Показатели которых мне удалось добиться: +100.000 слушателей на ЯМ, 42.000 прослушиваний альбома в ВК.",
    task:
      "Задача заключалась в наращивании количества уникальных слушателей в месяц через короткие видео.",
    role:
      "Я разработал стратегию продвижения под алгоритмы площадок, работал с отснятым материалом: разрабатывал идеи, подгонял материал под требования площадок, публиковал.",
    images: [
      "/img/dario.webp",
      "/img/dario2.png",
      "/img/dario3.png",
    ],
  },

  {
    id: 2,
    number: "02",
    label: "SOCIAL",
    name: "Social media",
    type: "VK / Telegram",
    categories: ["social", "design"],
    description:
      "Работа с социальными сетями: контент-план, посты, визуальная подача, публикация и анализ эффективности контента.",
    task:
      "ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ",
    role:
      "ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ",
    images: [
      "/img/social-1.jpg",
      "/img/social-2.jpg",
      "/img/social-3.jpg",
    ],
  },

  {
    id: 3,
    number: "03",
    label: "DESIGN",
    name: "Visual content",
    type: "Design / Photoshop",
    categories: ["design", "social"],
    description:
      "Создание визуальных материалов для социальных сетей сообщества «не школа гитары» с учетом общей стилистики проекта.",
    task:
      "ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ",
    role:
      "ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ",
    images: [
      "/img/design-1.jpg",
      "/img/design-2.jpg",
      "/img/design-3.jpg",
    ],
  },

    {
    id: 4,
    number: "04",
    label: "WEB",
    name: "Portfolio website",
    type: "HTML / CSS / REACT",
    categories: ["web"],
    description: "ТЕСТ",
    task:
      "ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ",
    role:
      "ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ ТЕСТОВОЕ ПОЛЕ",
    images: [
      "/img/design-1.jpg",
      "/img/design-2.jpg",
      "/img/design-3.jpg",
    ],
  },
]

function Works() {
  const [filter, setFilter] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <=700)
    }

    checkScreen()
    
    window.addEventListener("resize", checkScreen)

    return () => {
      window.removeEventListener("resize", checkScreen)
    }
  }, [])

  const [selectedWork, setSelectedWork] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)

  const filteredWorks =
    filter === "all"
      ? works
      : works.filter((work) =>
          work.categories.includes(filter)
        )

  const initialWorksCount = isMobile ? 4 : 3

  const displayedWorks = showAll
    ? filteredWorks
    : filteredWorks.slice(0, initialWorksCount)

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    setShowAll(false)
  }

  const openWork = (work) => {
    setSelectedWork(work)
    setCurrentImage(0)
    setTouchStartX(null)
  }

  const closeWork = () => {
    setSelectedWork(null)
    setCurrentImage(0)
    setTouchStartX(null)
  }

  const nextImage = (event) => {
    if (event) {
      event.stopPropagation()
    }

    if (!selectedWork) return

    setCurrentImage((prev) =>
      Math.min(
        prev + 1,
        selectedWork.images.length - 1
      )
    )
  }

  const previousImage = (event) => {
    if (event) {
      event.stopPropagation()
    }

    if (!selectedWork) return

    setCurrentImage((prev) =>
      Math.max(prev - 1, 0)
    )
  }

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX)
  }

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return

    const touchEndX = event.changedTouches[0].clientX
    const difference = touchStartX - touchEndX

    const swipeThreshold = 50

    if (Math.abs(difference) >= swipeThreshold) {
      if (difference > 0) {
        nextImage()
      } else {
        previousImage()
      }
    }

    setTouchStartX(null)
  }

useEffect(() => {
  if (!selectedWork) return

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeWork()
    }

    if (event.key === "ArrowRight") {
      setCurrentImage((prev) =>
        Math.min(prev + 1, selectedWork.images.length - 1)
      )
    }

    if (event.key === "ArrowLeft") {
      setCurrentImage((prev) =>
        Math.max(prev - 1, 0)
      )
    }
  }

  document.addEventListener("keydown", handleKeyDown)

  const previousOverflow = document.body.style.overflow

  document.body.style.overflow = "hidden"

  return () => {
    document.removeEventListener("keydown", handleKeyDown)

    document.body.style.overflow = previousOverflow
  }
}, [selectedWork])


  const modal = selectedWork
    ? createPortal(
        <div
          className="work-modal"
          onClick={closeWork}
        >
          <div
            className="work-modal__box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              className="work-modal__close"
              onClick={closeWork}
              aria-label="Закрыть"
            >
              ×
            </button>


            {/* IMAGE */}

            <div
              className="work-modal__visual"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >

              <img
                key={currentImage}
                className="work-modal__image"
                src={
                  selectedWork.images[
                    currentImage
                  ]
                }
                alt={`${selectedWork.name} — изображение ${
                  currentImage + 1
                }`}
              />


              {/* LEFT ARROW */}

              {currentImage > 0 && (
                <button
                  type="button"
                  className="work-modal__arrow work-modal__arrow--left"
                  onClick={previousImage}
                  aria-label="Предыдущее изображение"
                >
                  ←
                </button>
              )}


              {/* RIGHT ARROW */}

              {currentImage <
                selectedWork.images.length - 1 && (
                <button
                  type="button"
                  className="work-modal__arrow work-modal__arrow--right"
                  onClick={nextImage}
                  aria-label="Следующее изображение"
                >
                  →
                </button>
              )}


              {/* COUNTER */}

              {selectedWork.images.length > 1 && (
                <div className="work-modal__counter">
                  {String(
                    currentImage + 1
                  ).padStart(2, "0")}{" "}
                  /{" "}
                  {String(
                    selectedWork.images.length
                  ).padStart(2, "0")}
                </div>
              )}


              {/* IMAGE LABELS */}

              <div className="work-modal__visual-number">
                {selectedWork.number}
              </div>

              <div className="work-modal__visual-label">
                {selectedWork.label}
              </div>

            </div>


            {/* RIGHT INFO */}

            <div className="work-modal__info">

              <div className="work-modal__meta">
                {selectedWork.type}
              </div>

              <h3 className="work-modal__title">
                {selectedWork.name}
              </h3>

              <div className="work-modal__line" />

              <div className="work-modal__description-label">
                О проекте
              </div>

              <p className="work-modal__description">
                {selectedWork.description}
              </p>

              <div className="work-modal__description-label">
                Задача
              </div>

              <p className="work-modal__description">
                {selectedWork.task}
              </p>

              <div className="work-modal__description-label">
                Моя роль
              </div>

              <p className="work-modal__description">
                {selectedWork.role}
              </p>

            </div>

          </div>
        </div>,
        document.body
      )
    : null


  return (
    <>
      <section
        className="section works"
        id="works"
      >

        <div className="section__head">

          <div className="section__number">
            05
          </div>

          <h2 className="section__title">
            Работы
          </h2>

        </div>


        {/* FILTERS */}

        <div className="works__toolbar">

            <div className="works__filters">

              <button
                type="button"
                className={`filter ${
                  filter === "all"
                    ? "filter--active"
                    : ""
                }`}
                onClick={() =>
                  handleFilterChange("all")
                }
              >
                Все
              </button>

              <button
                type="button"
                className={`filter ${
                  filter === "social"
                    ? "filter--active"
                    : ""
                }`}
                onClick={() =>
                  handleFilterChange("social")
                }
              >
                SMM
              </button>

              <button
                type="button"
                className={`filter ${
                  filter === "video"
                    ? "filter--active"
                    : ""
                }`}
                onClick={() =>
                  handleFilterChange("video")
                }
              >
                Видео
              </button>

              <button
                type="button"
                className={`filter ${
                  filter === "design"
                    ? "filter--active"
                    : ""
                }`}
                onClick={() =>
                  handleFilterChange("design")
                }
              >
                Дизайн
              </button>

              <button
                type="button"
                className={`filter ${
                  filter === "web"
                    ? "filter--active"
                    : ""
                }`}
                onClick={() =>
                  handleFilterChange("web")
                }
              >
                Web
              </button>

            </div>



          <div className="works__count">
            {filteredWorks.length
              .toString()
              .padStart(2, "0")}{" "}
            работы
          </div>

        </div>


        {/* CARDS */}

        <div className="works__grid">

            {displayedWorks.map((work, index) => (
              <article
                className={
                  showAll && index >= 3
                    ? "work work--revealed"
                    : "work"
                }
                key={work.id}
                onClick={() => openWork(work)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault()
                    openWork(work)
                  }
                }}
              >


              <div className="work__visual">
                <img src={work.images && work.images.length > 0 ? work.images[0] : ""} alt="" />

                <div className="work__visual-top">

                  <span>
                    {work.number}
                  </span>

                  <span>
                    {work.label}
                  </span>

                </div>


                <div className="work__symbol">
                  {work.number}
                </div>


                <div className="work__view">
                  Смотреть ↗
                </div>

              </div>


              <div className="work__caption">

                <div>

                  <h3>
                    {work.name}
                  </h3>

                  <span>
                    {work.type}
                  </span>

                </div>


                <span className="work__caption-number">
                  {work.number}
                </span>

              </div>

            </article>

          ))}

        </div>


        {/* SHOW ALL */}

        {filteredWorks.length > 3 && (
          <div className="works__more">

            <button
              type="button"
              className="works__more-button"
              onClick={() =>
                setShowAll((prev) => !prev)
              }
            >
              {showAll
                ? "Скрыть часть ↑"
                : "Показать все ↓"}
            </button>

          </div>
        )}

      </section>


      {modal}

    </>
  )
}

export default Works
