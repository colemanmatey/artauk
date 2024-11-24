CREATE TABLE [dbo].[AuctionArt]
(
	[AuctionArtID] INT NOT NULL PRIMARY KEY IDENTITY,
	[AuctionID] INT NOT NULL,
	[ProfileID] INT NOT NULL,
	[ArtID] INT NOT NULL,
	[StartingBid] DECIMAL(10, 2) NOT NULL,
	[CurrentBid] DECIMAL(10, 2) NULL,
	[Status] NVARCHAR(50) CHECK (Status IN ('listed', 'sold', 'withdrawn')) NOT NULL,
	[CreatedAt] DATETIME NOT NULL DEFAULT SYSUTCDATETIME(),
	[UpdatedAt] DATETIME NULL DEFAULT NULL,
	CONSTRAINT FK_AuctionArt_AuctionID FOREIGN KEY (AuctionID) REFERENCES [dbo].[Auction](AuctionID),
	CONSTRAINT FK_AuctionArt_ProfileID FOREIGN KEY (ProfileID) REFERENCES [dbo].[Profile](ProfileID),
	CONSTRAINT FK_AuctionArt_ArtID FOREIGN KEY (ArtID) REFERENCES [dbo].[Art](ArtID)
)
