type TCardOffestSyzes = "xxl" | "xl" | "lg" | "md" | "sm" | "non";
type TCardType = "horizontal" | "vertical" | "bg-card";
type TCardContentPosition = "center" | "right" | "left";
type TTitleSize = "xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
type TUnversalSize = "xl" | "lg" | "md" | "sm" | "xs";
type TNumberSize = "big" | "normal";
type TTheme = "bg-lihgt" | "bg-lihgt-2" | "bg-dark" | "bg-color";
type TBodyDirection = "horizontal" | null;
type TCustomTextColorClass =
    | "accent"
    | "text-brand"
    | "text-brand-dark"
    | "text-light"
    | "text-light-2"
    | "disabled-text";

export interface ICard {
    wrapPadding: TCardOffestSyzes;
    bodyPadding?: TCardOffestSyzes;
    gap: TCardOffestSyzes;
    cardType: TCardType;
    contentPosition?: TCardContentPosition;
    titleSize?: TTitleSize;
    textSize?: TUnversalSize;
    numberSize?: TNumberSize;
    backgroundImage?: string;
    background?: TTheme;
    noBg?: boolean;
    imageReverse?: boolean;
    hideHeader?: boolean;
    bodyDirection?: TBodyDirection;
    imgSize?: TUnversalSize;
    bodyGap?: TCardOffestSyzes;
    customClass?: string;
    adaptive?: boolean;
    titleColorClass?: TCustomTextColorClass;
    textColorClass?: TCustomTextColorClass;
}