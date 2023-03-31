// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

contract TradingProposal {
    address public proposer;
    string public title;
    string public description;
    uint256 public voteThreshold;
    TradingProposalState public status;
    address[] public yesVoters;
    mapping(address => bool) public yesVotersList;
    address[] public noVoters;
    mapping(address => bool) public noVotersList;
    string private cid;
    bool public isListed;
    uint256 public listedPrice;

    enum TradingProposalState {
        VOTING,
        SUCCESS,
        FAIL
    }

    constructor(
        address _proposer,
        string memory _title,
        string memory _description,
        string memory _cid
    ) {
        proposer = _proposer;
        title = _title;
        description = _description;
        voteThreshold = 2;
        status = TradingProposalState.VOTING;
        cid = _cid;
    }

    function listDataset(address _lister, uint256 _price) public {
        require(status == TradingProposalState.SUCCESS);
        require(_lister == proposer);
        listedPrice = _price;
        isListed = true;
    }

    function hasVoted(address _voter) public view returns (bool) {
        return yesVotersList[_voter] || noVotersList[_voter];
    }

    function vote(address _voter, bool isVoteYes) public {
        require(status == TradingProposalState.VOTING);
        require(yesVotersList[_voter] != true);
        require(noVotersList[_voter] != true);
        if (isVoteYes) {
            yesVoters.push(_voter);
            yesVotersList[_voter] = true;
            if (yesVoters.length == voteThreshold) {
                status = TradingProposalState.SUCCESS;
            }
        } else {
            noVoters.push(_voter);
            noVotersList[_voter] = true;
            if (noVoters.length == voteThreshold) {
                status = TradingProposalState.FAIL;
            }
        }
    }

    function getDataSetCID() public view returns (string memory _cid) {
        if (status == TradingProposalState.SUCCESS) {
            return cid;
        } else if (status == TradingProposalState.FAIL) {
            return "Trading Proposal Failed";
        } else {
            return "Voting In Progress";
        }
    }

    function getStatus() public view returns (string memory _status) {
        if (status == TradingProposalState.SUCCESS) {
            return "Success";
        } else if (status == TradingProposalState.FAIL) {
            return "Failed";
        } else {
            return "Voting";
        }
    }

    function getNumberOfYesVotes() public view returns (uint256 _yesVotes) {
        return yesVoters.length;
    }

    function getNumberOfNoVotes() public view returns (uint256 _noVotes) {
        return noVoters.length;
    }
}
