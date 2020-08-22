import React from "react";
import "./SideBar.css";
import HomeIcon from "@material-ui/icons/HomeWork";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBaroptions from "./SideBarOptions";
import { useDataLayerValue } from "./DataLayer";


function SideBar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log("palylist",JSON.stringify(playlists));
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBaroptions title="Home" Icon={HomeIcon} />
      <SideBaroptions title="Search" Icon={SearchIcon} />
      <SideBaroptions title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebartitle">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SideBaroptions title={playlist.name} />

      ))}
    </div>
  );
}

export default SideBar;
