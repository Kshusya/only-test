import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, FreeMode } from "swiper";
import "swiper/css/navigation";
import "swiper/css/free-mode";

export interface HistoryProps
{

}

interface HistoryState
{
}

export class History extends Component<HistoryProps, HistoryState>
{
    prevButtonRef: React.MutableRefObject<null>;
    nextButtonRef: React.MutableRefObject<null>;

    constructor(props: HistoryProps) {
        super(props)

        this.prevButtonRef = React.createRef();
        this.nextButtonRef = React.createRef();
    }
      
    public render(): JSX.Element
    {
        return (
            <div>
                <div className="container">
                    <h1 className="headline">
                        Исторические<br/>даты
                    </h1>
                    <div className="crosshair">
                        <div className="crosshair__circle">
                            <div className="date-holder">
                                <span className="start-date">2015</span>
                                <span className="end-date">2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="swiper">
                            06/06
                            <div>+</div>
                            <div>-</div>
                        </div>
                        <div className="position-relative">
                            <Swiper
                                spaceBetween={80}
                                slidesPerView={3}
                                navigation={{
                                    prevEl: this.prevButtonRef.current,
                                    nextEl: this.nextButtonRef.current
                                }}
                                freeMode={true}
                                modules={[Navigation, FreeMode]}
                                onInit={() =>
                                    this.setState(prev => {return {...prev}})
                                }
                            >
                                <SwiperSlide className="card">
                                    <div className="card__year">2015</div>
                                    <div className="card__info">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</div>
                                </SwiperSlide>
                                <SwiperSlide className="card">
                                    <div className="card__year">2016</div>
                                    <div className="card__info">Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</div>
                                </SwiperSlide>
                                <SwiperSlide className="card">
                                    <div className="card__year">2017</div>
                                    <div className="card__info">Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</div>
                                </SwiperSlide>
                                <SwiperSlide className="card">
                                    <div className="card__year">2018</div>
                                    <div className="card__info">Компания Tesla все еще не выпустила электрический грузовик Tesla Semi</div>
                                </SwiperSlide>
                            </Swiper>
                            <button className="button-prev" ref={this.prevButtonRef}></button>
                            <button className="button-next" ref={this.nextButtonRef}></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}