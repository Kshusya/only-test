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
                        <EventsList
                            events={data[this.state.currentTheme].events}
                         />
                    </div>
                </div>
            </div>
        );
    }
}