import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../app/store/store";
import ProfileContent from "./ProfileContent";
import ProfileHearder from "./ProfileHeader";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default observer( function ProfilePage() {
    const {username}= useParams<{username: string}>();
    const {profileStore} = useStore();
    const {loadingProfile, loadProfile, profile} = profileStore;

    useEffect(() => {
        if(username)
        loadProfile(username);
    }, [loadProfile, username])
if(loadingProfile) return <LoadingComponent content='Loading profile...'/>
    return(
       <Grid>
        <Grid.Column width={16}>
{profile &&
<>

<ProfileHearder profile={profile}/>
<ProfileContent profile={profile}/>
</>}
        </Grid.Column>
       </Grid>
    )
})