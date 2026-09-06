// components/Avatar.js
import myImage from "../assets/my-image.jpeg";

export default function Avatar() {
    return (
        <div className="avatar-container">
            <div className="avatar-orbit avatar-orbit-one"></div>
            <div className="avatar-orbit avatar-orbit-two"></div>

            <div className="avatar-image-wrap">
                <img
                    src={myImage}
                    alt="Maaz Siddiqui"
                    className="avatar-image"
                />
            </div>

            <div className="avatar-status">
                <span></span>
                Available
            </div>
        </div>
    );
}