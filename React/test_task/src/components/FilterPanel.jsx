import {ClassFilter} from "./ClassFilter.jsx";

export function FilterPanel(){
    return (
        <div className={'filter-wrapper'}>
            <div className={'logo-wrapper'}>
                <div className={'logo'}>
                    <img className={'logo-image'} src="../../images/logo.png" alt=""/>
                </div>
            </div>
            <ClassFilter/>
            <div className={'additionl-options'}>
                <span>Clear Filter</span>
                <span>Need help?</span>
            </div>
        </div>
    )
}