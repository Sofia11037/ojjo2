import "./galleries.scss";

export default function Gallery() {
    return (
        <div className="gallery">
        <div className="block-left">
            <div className="video">
                <img src="/gallery/column-left/img_video.png" alt="" />
                <div className="play">
                    <img src="/icons/play.svg" alt="" />
                </div>
            </div>
            <div className="block-row">
                <img src="/gallery/column-left/img_1.png" alt="" />
                <img src="/gallery/column-left/img_2.png" alt="" />
            </div>
        </div>
        <div className="block-right">
            <div className="block-row">
                <img src="/gallery/column-right/img_1.png" alt="" />
                <img src="/gallery/column-right/img_2.png" alt="" />
            </div>
            <div className="video">
                <img src="/gallery/column-right/img_video.png" alt="" />
                <div className="play">
                    <img src="/icons/play.svg" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
}