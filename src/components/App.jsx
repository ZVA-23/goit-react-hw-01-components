import user from '../data/user.json';
import { Profile } from './Profile/Profile';

// import data from '../data/data.json';
// import { StaticsList } from './StatisticsList/StatisticsList';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* <StaticsList title="Upload stats" stats={data} /> */}
      
    </>

  );
};

