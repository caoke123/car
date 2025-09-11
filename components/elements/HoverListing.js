'use client'
import { useEffect } from 'react'


const HoverListing = () => {
    useEffect(() => {
        // Function to show only the first image
        const showFirstImageOnly = () => {
            const elements = document.querySelectorAll('.hover-listing-image')
            elements.forEach((element) => {
                const listingItems = element.querySelectorAll('.listing-item')
                const blItems = element.querySelectorAll('.bl-item')

                // Remove active class from all items first
                listingItems.forEach(item => item.classList.remove('active'))
                blItems.forEach(item => item.classList.remove('active'))

                // Set only the first listing item and bl item as active
                if (listingItems.length > 0) {
                    listingItems[0].classList.add('active')
                    if (blItems.length > 0) {
                        blItems[0].classList.add('active')
                    }
                }
            })
        }

        // Call the showFirstImageOnly function when the component mounts
        showFirstImageOnly()
    }, [])

    return null
}

export default HoverListing