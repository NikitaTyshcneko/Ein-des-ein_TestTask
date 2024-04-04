export function ClassFilter() {
    return (
        <div className={'classfilter-wrapper'}>
            <div className={'classfilter-text'}>Classes filter</div>
            <div className={'classfilter-select'}>
                <span>Select All</span>
                <span>Deselect all</span>
            </div>
            <div className={'classfilter-filters'}>
                <div className={'classfilter-name'}>Elbow positive</div>
                <div className={'classfilter-name'}>Fingers positive</div>
                <div className={'classfilter-name'}>Humerus</div>
                <div className={'classfilter-name'}>Forearm fracture</div>
                <div className={'classfilter-name'}>Humerus fracture</div>
                <div className={'classfilter-name'}>Shoulder fracture</div>
                <div className={'classfilter-name'}>Wrist positive</div>
            </div>
        </div>
    )
}