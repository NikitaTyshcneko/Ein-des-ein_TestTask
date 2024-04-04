import {useApp} from "../context/AppContext.jsx";

export function Detections(){
    const appData = useApp()

    const limitedImages = appData?.siteData?.images.slice(0, 39);

    return (
        <div className={'detection-images'}>
            {limitedImages.map((item, index) => (
                <div className={'detection-item'} key={index}>
                    <div className={'item-image'}>
                        <img className={'image'} src={`http://localhost:5173/src/archive/test/images/${item?.filename?.filename}`} alt=""/>
                    </div>
                    <span className={'item-text'}>Fingers 3 positi...</span>
                </div>
            ))}
        </div>
    )
}