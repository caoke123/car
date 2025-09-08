import VideoPopup from '../elements/VideoPopup'

export default function Video() {
    return (
        <>
            <div className="widget-tf-video" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1559526324-593bc054d377?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}></div>
                <div className="themesflat-container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="tf-video video-wrap">
                        <VideoPopup style={1}/>
                        <div className="title-video" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Watch <span className="text-red">Video</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
