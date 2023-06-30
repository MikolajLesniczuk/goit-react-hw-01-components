
import { Container } from "./container";

import { Profile } from "./profile";
import user from '../configs/user';

import { Statistic } from "./Statistics/Statistic";
import data from '../configs/data';

import { Friends } from "./Friends/Friends";
import friends from '../configs/friends';

import { TransactionHistory } from "./Transactions/Transactions";
import transactions from '../configs/transactions'






export const App = () => {
  return (
   <Container>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistic title="Upload stats" stats={data} />
<Friends friends={friends} />
<TransactionHistory items={transactions} />

   </Container>
  );
};
