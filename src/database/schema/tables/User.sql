﻿CREATE TABLE [dbo].[User]
(
    [UserID] INT NOT NULL PRIMARY KEY, 
    [Username] NVARCHAR(50) NOT NULL, 
    [Email] NVARCHAR(255) NOT NULL, 
    [PasswordHash] NVARCHAR(255) NOT NULL, 
    [IsActive] BIT NOT NULL DEFAULT 1, 
    [CreatedAt] DATETIME NOT NULL DEFAULT SYSUTCDATETIME(), 
    [UpdatedOn] DATETIME NULL DEFAULT NULL, 
    [LastLogin] DATETIME NULL DEFAULT NULL,
    CONSTRAINT UQ_User_Username UNIQUE (Username),
    CONSTRAINT UQ_User_Email UNIQUE (Email)
)
GO