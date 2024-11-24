CREATE TABLE [dbo].[Auction]
(
	[AuctionID] INT NOT NULL PRIMARY KEY IDENTITY,
	[Title] NVARCHAR(255) NOT NULL,
    [Description] NVARCHAR(500) NULL,
    [StartDate] DATETIME NOT NULL,
    [EndDate] DATETIME NOT NULL,
    [Status] NVARCHAR(50) CHECK ([Status] IN ('active', 'closed', 'pending')) NOT NULL DEFAULT 'pending',
)
