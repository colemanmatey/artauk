﻿CREATE TABLE [dbo].[Role]
(
	[RoleID] INT NOT NULL PRIMARY KEY IDENTITY, 
    [RoleName] NVARCHAR(50) NOT NULL, 
    [RoleDescription] NVARCHAR(150) NULL
)