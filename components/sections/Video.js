import YouTubePlayer from '../elements/YouTubePlayer'

export default function Video() {
    return (
        <>
            <section className="video-section" style={{
                padding: '80px 0',
                backgroundColor: '#f8f9fa'
            }}>
                <div className="container">
                    <div className="text-center mb-3">
                        <h2 className="section-title">Watch <span style={{ color: '#ff4444' }}>Video</span></h2>
                        <p className="section-subtitle">Discover our amazing automotive experience</p>
                    </div>
                    <YouTubePlayer 
                        videoId="JyGROfuXggk" 
                        thumbnailUrl="/assets/images/unsplash/video-bg.jpg"
                        title="MotorX Car Experience"
                    />
                </div>
            </section>
        </>
    )
}
