

create database TravelCompanion 
go 

use TravelCompanion
go

create table ShareContent (
	slogan nvarchar(500) NOT NULL,
	introduction nvarchar(900) NULL,
	phone nvarchar(10) NULL,
	email nvarchar(20) NULL,
	address nvarchar(100) NULL,
)
go

create table Account (
	id uniqueidentifier DEFAULT NEWID() primary key,
	email nvarchar(1000) ,
	userName nvarchar(50) ,
	password varchar(50) ,
	bio nvarchar(max) ,
	avata nvarchar(100),
	status int,
)
go

create table Blog (
	id uniqueidentifier  DEFAULT NEWID() primary key,
	title nvarchar(1000),
	description nvarchar(max),
	content ntext,
	dateCreacted datetime,
	dateModified datetime,
	status int,
)
go 

create table Category (
	id uniqueidentifier  DEFAULT NEWID() primary key ,
	categoryName nvarchar(100) NULL,
)
go
create table Ward (
	id uniqueidentifier   DEFAULT NEWID()primary key ,
	ward nvarchar(1000) ,
	description nvarchar(max) ,
	content ntext ,
)
go

create table Place (
	id uniqueidentifier  DEFAULT NEWID() NOT NULL primary key,
	name nvarchar(1000) NULL,
	address nvarchar(max) NULL,
	openTime datetime NULL,
	closeTime datetime NULL,
	price money NULL,
	categoryID uniqueidentifier  foreign key references  Category(id),
	wardID  uniqueidentifier  foreign key references  Ward(id)
)
go 

create table ImageBlog (
	id uniqueidentifier  DEFAULT NEWID() primary key,
	imgLink nvarchar(4000) ,
	blogID uniqueidentifier  foreign key references  Blog(id)
)
go

create table ImagePlace (
	id uniqueidentifier  DEFAULT NEWID() primary key,
	imgLink nvarchar(4000) ,
	placeID uniqueidentifier  foreign key references  Blog(id)
)
go


