import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistic/Statistic';
import { Friends } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components//TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transaction from 'data/transactions.json';

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
      <Statistic stats={data} />
      <Friends friends={friends} />
      <TransactionHistory transactions={transaction} />
    </>
  );
};
