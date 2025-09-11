'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {style == 1 &&
                <div className="video-cover-container" style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setOpen(true)}>
                    <img 
                        src="/assets/images/unsplash/video-bg.png" 
                        alt="Video Cover" 
                        style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                    <div className="play-button-overlay" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '50%',
                        width: '80px',
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                    }}>
                        <i className="icon-Polygon-6" style={{ fontSize: '24px', color: '#ff4444' }} />
                    </div>
                </div>
            }
            {style == 2 &&
                <a onClick={() => setOpen(true)} className="popup-youtube btn-video ml-28">
                    <i className="icon-Polygon-6" />
                </a>
            }
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />


        </>
    )
}