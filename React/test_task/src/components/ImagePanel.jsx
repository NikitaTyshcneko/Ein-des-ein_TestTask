import {Detections} from "./Detections.jsx";

export function ImagePanel(){
    return (
        <div className={'detection-wrapper'}>
            <div className={'detection-name-itemscount'}>
                <span className={'name'}>Bone-fracture-detection</span>
                <span className={'itemscount'}>39 images</span>
            </div>
            <div className={'detection-categories'}>
                <div className={'categories active'}>All groups</div>
                <div className={'categories'}>Train</div>
                <div className={'categories'}>Value</div>
                <div className={'categories'}>Test</div>
            </div>
            <Detections/>
        </div>
    )
}