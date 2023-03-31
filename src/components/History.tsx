import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, FreeMode } from "swiper";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import data from "../data"
import { EventsList } from "./EventsList";

export interface HistoryProps
{

}

interface HistoryState
{
    currentTheme: number
}

export class History extends Component<HistoryProps, HistoryState>
{
    constructor(props: HistoryProps) {
        super(props)

        this.state = {
            currentTheme: 0
        }
    }

    prevThemeAvailable = (): boolean => this.state.currentTheme > 0
    nextThemeAvailable = (): boolean => this.state.currentTheme < data.length - 1

    prevTheme = () => {
        this.setState(prev => {
            return { currentTheme: prev.currentTheme - 1 }
        })
    }

    nextTheme = () => {
        this.setState(prev => {
            return { currentTheme: prev.currentTheme + 1 }
        })
    }
      
    public render(): JSX.Element
    {
        let spaceBetweenCrosshairItems = 360 / data.length
        let currentThemeObj = data[this.state.currentTheme]
        
        return (
            <div>
                <div className="container container-crosshair">
                    <h1 className="headline">
                        Исторические<br/>даты
                    </h1>
                    <div className="crosshair">
                        <div className="crosshair__circle">
                            {data.map((theme, i) => <div
                                key={i}
                                className="crosshair__element"
                                style={{ '--deg': `${(i - (this.state.currentTheme + 1)) * spaceBetweenCrosshairItems}deg` } as React.CSSProperties}>
                                <button onClick={() => {
                                    this.setState({currentTheme: i})
                                }} className={`crosshair__dot ${this.state.currentTheme === i ? "active": ""}`}>
                                    <a className="crosshair__number">
                                        {theme.id}
                                    </a>
                                    <span className="crosshair__title">
                                        {theme.title}
                                    </span>
                                </button>
                            </div>)}
                        </div>
                        <div className="date-holder">
                            <span>{currentThemeObj.events[0].year}</span>
                            <span>{currentThemeObj.events.at(-1)!.year}</span>
                        </div>
                    </div>
                    <div className="wrapper">
                        
                        <EventsList
                            themeId={this.state.currentTheme}
                            events={currentThemeObj.events}
                        />
                        <div className="navigation">
                            <div>
                                <div className="slides-count">
                                    {
                                        (this.state.currentTheme + 1).toString().padStart(2, "0")
                                    }/{
                                        data.length.toString().padStart(2, "0")
                                    }
                                </div>
                                <div className="theme-buttons">
                                    <button
                                        className="theme-buttons__prev"
                                        disabled={!this.prevThemeAvailable()}
                                        onClick={this.prevTheme}></button>
                                    <button
                                        className="theme-buttons__next"
                                        disabled={!this.nextThemeAvailable()}
                                        onClick={this.nextTheme}></button>
                                </div>
                            </div>
                            <div className="pagination-block">
                                {data.map((theme, i) => 
                                    <button 
                                    onClick={() => this.setState({currentTheme: i})}
                                    className={`pagination ${this.state.currentTheme === i ? "active": ""}`}
                                    ></button>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}