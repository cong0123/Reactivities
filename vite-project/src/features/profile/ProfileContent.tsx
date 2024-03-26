import { Tab } from "semantic-ui-react";
import ProfilePhotos from "./ProfilePhotos";
import { Profile } from "../../app/model/profile";
import { observer } from "mobx-react-lite";

interface Props {
    profile: Profile;   
}
export default observer( function ProfileContent({profile}: Props) {
  
        const panes = [
            {menuItem: 'About', render: () => <Tab.Pane>About Content</Tab.Pane>},
            {menuItem: 'Photos', render: () => <ProfilePhotos profile={profile}/>},
            {menuItem: 'Events', render: () => <Tab.Pane>Event Content</Tab.Pane>},
            {menuItem: 'Follower', render: () => <Tab.Pane>Follower Content</Tab.Pane>},
            {menuItem: 'Following', render: () => <Tab.Pane>Following Content</Tab.Pane>},
        ];
        return(
            <Tab
                menu = {{fuild: true, vertical: true}}
                menuPosition ='right'
                panes ={panes}
            />
        )
})