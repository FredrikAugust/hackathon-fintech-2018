// Later this will be gone
import { Transaction } from "./Transaction.jsx";
import { GroupTransactionSubMenu } from "./GroupTransactionSubMenu.jsx";

export const GroupTransactions = () => ( 
  <div>
    <Transaction>
      <GroupTransactionSubMenu />
    </Transaction>
  </div> 
);