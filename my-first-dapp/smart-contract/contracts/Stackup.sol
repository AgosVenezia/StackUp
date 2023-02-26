// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract StackUp {
    enum playerQuestStatus {
        NOT_JOINED,
        JOINED,
        SUBMITTED
    }

    struct Quest {
        uint256 questId;
        uint256 numberOfPlayers;
        string title;
        uint8 reward;
        uint256 numberOfRewards;
    }

    address public admin;
    uint256 public nextQuestId;
    mapping(uint256 => Quest) public quests;
    mapping(address => mapping(uint256 => playerQuestStatus))
        public playerQuestStatuses;

    constructor() {
        admin = msg.sender;
    }

    function createQuest(
        string calldata title_,
        uint8 reward_,
        uint256 numberOfRewards_
    ) external {
        require(msg.sender == admin, "Only the admin can create quests");
        quests[nextQuestId].questId = nextQuestId;
        quests[nextQuestId].title = title_;
        quests[nextQuestId].reward = reward_;
        quests[nextQuestId].numberOfRewards = numberOfRewards_;
        nextQuestId++;
    }

    function joinQuest(uint256 questId) external questExists(questId) {
        require(
            playerQuestStatuses[msg.sender][questId] ==
                playerQuestStatus.NOT_JOINED,
            "Player has already joined/submitted this quest"
        );
        playerQuestStatuses[msg.sender][questId] = playerQuestStatus.JOINED;

        Quest storage thisQuest = quests[questId];
        thisQuest.numberOfPlayers++;
    }

    function submitQuest(uint256 questId) external questExists(questId) {
        require(
            playerQuestStatuses[msg.sender][questId] ==
                playerQuestStatus.JOINED,
            "Player must first join the quest"
        );
        playerQuestStatuses[msg.sender][questId] = playerQuestStatus.SUBMITTED;
    }

    modifier questExists(uint256 questId) {
        require(quests[questId].reward != 0, "Quest does not exist");
        _;
    }
}