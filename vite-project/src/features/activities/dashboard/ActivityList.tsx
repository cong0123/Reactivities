import { observer } from 'mobx-react-lite';
import {Header} from "semantic-ui-react";
import { useStore } from '../../../app/store/store';
import ActivityListItem from './ActivityListItem';
import { Fragment } from 'react/jsx-runtime';



export default observer(function ActivityList() {
  const {activityStore} = useStore();
  const { groupedActivity} = activityStore;



  return (
    <>
    {groupedActivity.map(([group, activities]) => (
        <Fragment key={group}>
        <Header sub color='teal'>
            {group}
        </Header>
       
      {activities.map(activity => (
                    <ActivityListItem key={activity.id} activity={activity}/>
                ))}
            
        </Fragment>
    
    ))}
   
        </>
    )
    
})
