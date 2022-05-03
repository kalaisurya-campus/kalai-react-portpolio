import React from "react";

import "./styles/Resume.scss";
function Resume(props) {
    return (
        <div className="test-main">
            <div className="inside_resume_content">
                <div className="top-title-header">Resume</div>
                <div className="body-resume-content">
                    <div className="profile-settings">
                        <div className="left-profile">
                            <div className="image_box mt-4">
                                <img
                                    src="https://picsum.photos/seed/picsum/200/300"
                                    className="image-profile"
                                />
                            </div>
                        </div>
                        <div className="right-profile">left profiles</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
