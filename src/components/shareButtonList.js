import React from 'react'
import {
    FacebookIcon,
    FacebookShareButton,
    XIcon,
    TwitterShareButton,
    LineIcon,
    LineShareButton,
    HatenaIcon,
    HatenaShareButton,
} from 'react-share'

const ShareButtonList = ({ title, id }) => {
    const titleKagegonomi = title + " | カゲゴノミ"
    const shareUrl = `https://kagegonomi.com/content/${id}`;

    return (
        <div className="flex justify-end">
            <div className="pr-2">
                <FacebookShareButton title={titleKagegonomi} url={shareUrl}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>

            <div className="pr-2">
                <TwitterShareButton title={titleKagegonomi} url={shareUrl}>
                    <XIcon size={32} round />
                </TwitterShareButton>
            </div>

            <div className="pr-2">
                <LineShareButton title={titleKagegonomi} url={shareUrl} >
                    <LineIcon size={32} round />
                </LineShareButton>
            </div>

            <div className="pr-2">
                <HatenaShareButton title={titleKagegonomi} url={shareUrl} >
                    <HatenaIcon size={32} round />
                </HatenaShareButton>
            </div>
        </div>
    )
}

export default ShareButtonList