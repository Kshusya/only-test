import React, { Component } from "react";
import { App } from "./App";
import { History } from "./components/History";

export interface MainProps
{
    app: App;
}

interface MainState 
{
}

export class Main extends Component<MainProps, MainState>
{
    constructor(props: MainProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <>
                <History/>
            </>
        );
    }
}