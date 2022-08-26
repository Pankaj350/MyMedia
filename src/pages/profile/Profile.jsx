import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/3p.jpg" alt="" className="profileCoverImg" />
                            <img src="assets/post/5post.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Pankaj Kannaujiya</h4>
                            <span className="profileInfoDesc">About me</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">

                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
