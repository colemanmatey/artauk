CREATE TABLE [dbo].[Profile]
(
    [ProfileID] INT NOT NULL PRIMARY KEY IDENTITY,
    [UserID] INT NOT NULL,
    [FirstName] NVARCHAR(50) NOT NULL,
    [LastName] NVARCHAR(50) NOT NULL,
    [DateOfBirth] DATE NULL,
    [Phone] NVARCHAR(20) NULL,
    [Address] NVARCHAR(255) NULL,
    [City] NVARCHAR(100) NULL,
    [State] NVARCHAR(100) NULL,
    [PostalCode] NVARCHAR(20) NULL,
    [Country] NVARCHAR(100) NULL,
    [ProfilePicture] NVARCHAR(255) NULL, -- URL or path to user's profile picture
    [Bio] NVARCHAR(500) NULL,
    [CreatedAt] DATETIME NOT NULL DEFAULT SYSUTCDATETIME(),
    [UpdatedAt] DATETIME NULL DEFAULT NULL,
    CONSTRAINT UQ_Profile_UserID UNIQUE (UserID),
    CONSTRAINT FK_Profile_UserID FOREIGN KEY (UserID) REFERENCES [dbo].[User](UserID)
)
GO