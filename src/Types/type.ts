export type navbaritemprops = {
    children:any
    to:string
    
}
export type navbarprops = {
    children:any
}
export type flipprops ={
    src:string
    src2:string
}
export type projectcarouselprops ={
    slides: React.ReactNode[];
    autoplay?: boolean;
    interval?: number;
    onSlideChange?: (index: number) => void;
}