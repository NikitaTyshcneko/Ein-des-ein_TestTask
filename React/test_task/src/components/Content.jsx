import {FilterPanel} from "./FilterPanel.jsx";
import {ImagePanel} from "./ImagePanel.jsx";
import {useApp} from "../context/AppContext.jsx";

export function Content() {
    const appData = useApp();

    return (
        <div className={'content-wrapper'}>
            <div className={'content'}>
                <FilterPanel/>
                <ImagePanel/>
            </div>
        </div>
    )
}