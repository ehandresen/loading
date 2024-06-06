DROP SCHEMA IF EXISTS Loading;
CREATE SCHEMA Loading;
USE Loading;

-- Opprett tabellene
CREATE TABLE Player (
    PlayerID INT auto_increment,
    Playernavn VARCHAR(20),
    PRIMARY KEY (PlayerID)
);

CREATE TABLE Questions (
    QuestionID INT auto_increment,
    QuestionContent VARCHAR(200),
    AnswerA VARCHAR(100),
    AnswerB VARCHAR(100),
    AnswerC VARCHAR(100),
    AnswerD VARCHAR(100),
    PRIMARY KEY (QuestionID)
);

CREATE TABLE PlayerAnswer (
    PlayerAnswerID INT auto_increment,
    Answer VARCHAR(10),
    PlayerID INT,
    QuestionID INT,
	CONSTRAINT PlayerAnswerPlayerFK FOREIGN KEY (PlayerID) REFERENCES Player (PlayerID),
    CONSTRAINT PlayerAnswerQuestionsFK FOREIGN KEY (QuestionID) REFERENCES Questions (QuestionID),
    PRIMARY KEY (PlayerAnswerID)
);

CREATE TABLE Score (
    ScoreID INT auto_increment,
    ScoreA INT,
    ScoreB INT,
    ScoreC INT,
    ScoreD INT,
    QuestionID INT,
    CONSTRAINT ScoreQuestionsFK FOREIGN KEY (QuestionID) REFERENCES Questions (QuestionID),
    PRIMARY KEY (ScoreID)
);
CREATE TABLE Feedback (
	FeedbackID INT auto_increment,
	FeedbackContent VARCHAR (300),
	PlayerID INT,
	CONSTRAINT FeedbackPlayerFK FOREIGN KEY (PlayerID) REFERENCES Player (PlayerID),
    PRIMARY KEY (FeedbackID)
    );
CREATE TABLE Administrator (
	AdminID INT,
    AdminName VARCHAR(100)
);
CREATE table Login (
	GameID INT,
	PIN INT
);

CREATE TABLE Game (
    GameID INT auto_increment,
    GameName VARCHAR(100),
    PIN INT UNIQUE,
    PRIMARY KEY (GameID)
);

CREATE TABLE GameLogin (
    GameLoginID INT auto_increment,
    GameID INT,
    PlayerID INT,
    CONSTRAINT GameLoginGameFK FOREIGN KEY (GameID) REFERENCES Game (GameID),
    CONSTRAINT GameLoginPlayerFK FOREIGN KEY (PlayerID) REFERENCES Player (PlayerID),
    PRIMARY KEY (GameLoginID)
);