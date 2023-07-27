// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Transactions { 
    uint public transactionCount = 0;
    


    event TransactionAdded(
        uint id,
        address sender,
        address payable receiver,
        string keyword,
        uint amount,
        bool transacted,
        uint256 timestamp,
        string message
    );

    struct Transaction{
        uint id;
        address sender;
        address payable receiver;
        string keyword;
        uint amount;
        bool transacted;
        uint256 timestamp;
        string messages;
    } 

    Transaction[] transactions;

    function addTransaction(address payable receiver, uint _amount, string memory _keyword, string memory _messages) public {
        // increament count
        transactionCount ++;
        // parsein parameters
        // add a transaction
        transactions[transactionCount] = Transaction(transactionCount, msg.sender, receiver, _keyword, _amount, true, block.timestamp, _messages);
        // trigger an event
        emit TransactionAdded(transactionCount, msg.sender, receiver, _keyword, _amount, true, block.timestamp, _messages);
    }

    function getTransactions() public view returns(Transaction[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns(uint256) {
        return transactionCount;
    }

}