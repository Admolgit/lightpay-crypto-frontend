import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import { RiDownloadLine } from 'react-icons/ri';
import classes from './Transaction.module.css'

const Transactions = () => {

  const from = '0x78cducfdbuvyfbvfuvee78';
  
  // RiDownloadLine
  // const [transaction, setTransaction] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=0`)
  //   .then(res => {
  //     // console.log(res.data.coins);
  //     setTransaction(res.data.coins);
  //   })
  //   .catch((err) => { console.log(err) });
  // }, []);

  // console.log(transaction.map((trans) => {
  //   return trans;
  // }));

  return (
    <div className={classes.transactionContainer}>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> <strong>From:&nbsp;</strong>{from.slice(0,5) + '...' + from.slice(-4)}</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Sent</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Sent</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Receive</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
      <div className={classes.transactionCard}>
        <div className={classes.receivedImg}>
          <RiDownloadLine className={classes.img}></RiDownloadLine>
        </div>
        <div className={classes.transactionCard2}>
          <div className={classes.received1}>
            <h1>Sent</h1>
            <p className={classes.colour}>May 25 <span> From:0x78c...ee78</span></p>
          </div>
          <div className={classes.received2}>
            <h1>1 ETH</h1>
            <p>1 ETH</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions;