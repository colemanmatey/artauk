CREATE TABLE [dbo].[ProfileRole]
(
	[ProfileRoleID] INT NOT NULL PRIMARY KEY,
	[ProfileID] INT NOT NULL,
	[RoleID] INT NOT NULL,
	CONSTRAINT FK_ProfileRoles_ProfileID FOREIGN KEY (ProfileID) REFERENCES [dbo].[Profile](ProfileID),
	CONSTRAINT FK_ProfileRoles_RoleID FOREIGN KEY (RoleID) REFERENCES [dbo].[Role](RoleID)

)
