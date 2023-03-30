import React, { Component } from "react";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface EventsListProps {
    events: { year: number, info: string }[]
}

export class EventsList extends Component<EventsListProps, {}>
{
    prevButtonRef: React.MutableRefObject<null>;
    nextButtonRef: React.MutableRefObject<null>;

    constructor(props: EventsListProps) {
        super(props)

        this.prevButtonRef = React.createRef();
        this.nextButtonRef = React.createRef();
        this.state = {
            currentTheme: 0
        }
    }

    public render(): JSX.Element {
        return (
            <div className="position-relative carousel" style={{ "cursor": "grab" }}>
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
                        this.setState(prev => { return { ...prev } })
                    }
                >
                    {this.props.events.map(
                        (event, i) =>
                            <SwiperSlide
                                key={i}
                                className="card">
                                <div className="card__year">{event.year}</div>
                                <div className="card__info">{event.info}</div>
                            </SwiperSlide>
                    )}
                </Swiper>
                <button className="carousel__button-prev" ref={this.prevButtonRef}></button>
                <button className="carousel__button-next" ref={this.nextButtonRef}></button>
            </div>)
    }
}