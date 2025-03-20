# компонент карточки

## основные настройки

- wrapPadding
  - xxl
  - xl
  - lg
  - md
  - sm
  - non ( можно ничего не передавать ) **_default_**
  ***
  >
        wrapPadding нужен для падингов от самой карточки
- bodyPadding
  - xxl
  - xl
  - lg
  - md
  - sm
  - non ( можно ничего не передавать ) **_default_**
  ***
  >
        bodyPadding нужен для падингов у блока card-body
        пример - карточка в которой нужно чтобы картинка (т.е card-header)
        был на всю ширину блока, но блока с инфой (т.е card-body) был падинг
- gap
  - xxl
  - xl
  - lg
  - md
  - sm
  - non ( можно ничего не передавать ) **_default_**
    >
        gap юзаем когда нужен гап между card-header, card-body, card-footer
- noBg
  - true
  - false **_default_**
    >
        noBg юзаем когда нужно убрать фон
- cardType
  - horizontal,
  - vertical **_default_**
  - bg-card
    >
        cardType для выбора типа карточки
- contentPosition
  - center
  - right
  - left **_default_**
    >
          contentPosition юзаем когда нужен сместить контект карточки по центру/вправо

---

## опциональные настройки

- titleSize
  - xxxl
  - xxl
  - xl
  - lg
  - md **_default_**
  - sm
  - xs
- textSize
  - xl
  - lg
  - md **_default_**
  - sm
- numberSize
  - big
  - normal **_default_**
- backgroundImage
  >
      если нужна фоновая картинка в не зависимости от типа блока, то передаем картинку в параметре props.backgroundImage
- background
  - bg-lihgt
  - bg-lihgt-2
  - bg-dark
  - bg-color
    >
        если нужен один из фонов, то передаем класс в параметре props.background, по дефолту берется тема родителя
- imageReverse
  >
        юзаем props.imageReverse когда нужно сделать картинку с другой стороны, к примеру в горизонтальной карточке сделать картинку справа ( также этого можно добиться с адиинки props.image_position == 'bottom' && props.type == 'image')
- bodyDirection
  - horizontal
  - null **_default_**
    >
            если нужно отдельно настроить направление верстки внутри card-body
- hideHeader
  - true
  - false/null **_default_**
    >
            если нужно не рендерить .card-header
- imgSize
  - xl
  - lg
  - md **_default_**
  - sm
  - xs
    >
            выбор размера картинки
- bodyGap
  - xxl
  - xl
  - lg
  - md
  - non ( можно ничего не передавать ) **_default_**
    >
        bodyGap юзаем когда нужен гап внутри .card-body
- customClass
  > иногда нужно чтобы передать какие-то уникальные классы
- adaptive
  > иногда нужно чтобы горизонтальная карточка адаптировалась
- titleColorClass и textColorClass
  > для переркаски тайтла/текста в другие цвета ( классы цветов можно глянуть в \_background.scss)

## настройки вывода информации в карточке

### сама карточка состоит из таких компонентов

- card-image ( находится в card-header)
  - обязательно передаем props.image
- card-rating ( находится в card-header)
  - обязательно передаем props.post_rating
- card-icon ( находится в card-header)
  - обязательно передаем props.icon
- card-number ( находится в card-header)
  - обязательно передаем props.number
  - опционально (принимает big и normal) props.numberSize
- card-title ( находится в card-body)
  - обязательно передаем props.title
  - опционально (принимает md, sm, lg, xl) props.titleSize
- card-color-text ( находится в card-body)
  - обязательно передаем props.colorText
- card-text ( находится в card-body)
  - обязательно передаем props.text или props.description
- card-aditional-info ( находится в card-body)
  - это полностью опциональный блок, но в него можно передавать массив кнопок props.btns и доп заголовок props.additional-info-title

---

## примеры
