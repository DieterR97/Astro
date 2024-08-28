export interface Status {
  status_id: number;
  status_name: string;
  total_amount_criteria: number;
  transactions_criteria: number;
  annual_interest_rate: number;
  transaction_fee: number;
}

export interface Transaction {
  transaction_id: number;
  transaction_type: string;
  amount: number;
  timestamp: Date;
  from_account_id: number;
  to_account_id: number;
  from_account?: Account; 
  to_account?: Account; 
}

export interface Asset {
  asset_id: number;
  name: string;
  abbreviation: string;
  price: number;
  amount: number;
}

export interface Account {
  accountId: number;
  balance: number;
  assets: {
    $values: Asset[];
  };
  status: Status;
  account_status_id: number;
  active: boolean;
  transactionsFrom: {
    $values: Transaction[];
  };
  transactionsTo: {
    $values: Transaction[];
  };
}

export interface User {
  user_id: number;
  email: string;
  username: string;
  account: Account;
}

export {};
