# Latihan Crud (Trello Clonning)

## Introduction

> Api CRUD untuk membuat todolist seperti Trello

## Code Samples
> Board - Url : http://{HOST}/api/board

|Action     | Method     | Endpoint      | Parameter               |
|-----------| ---------- |:-------------:| ------------------------|
|get data   | get        | /             |                         |
|add data   | post       | /             |{"boardName" : "string"} |
|edit data  | put        | /id           |{"boardName" : "string"} |
|delete data| delete     | /id           |                         |


> Task- Url : http://{HOST}/api/task

|Action     | Method     | Endpoint      | Parameter|
|-----------| ---------- |:-------------:| ---------------------------------------|
|get data   | get        |               |?boardId=1                              |
|add data   | post       | /             |{"boardId" : 4, "taskName" : "string" } |
|edit data  | put        | /id           |{"taskName" : "string"}                 |
|delete data| delete     | /id           |                                        |

> Sub Task- Url : http://{HOST}/api/subtask

|Action     | Method     | Endpoint      | Parameter|
|-----------| ---------- |:-------------:| ---------------------------------------------|
|add data   | post       | /             |{"taskId" : 2, "subTaskName" : "string"}      |
|edit data  | put        | /id           |{"subTaskName" : "string", status" : boolean} |
|delete data| delete     | /id           |                                              |


## Installation

aplikasi ini menggunakan library [Sequelzie](https://sequelize.org/) sebagai ORM database, sehingga bisa menggunakan database seperti (Mysql, Mariadb, Postgre, dll), silahkan baca petunjuk untuk penggunaan ORM sequelize,

> Untuk instalasi aplikasi
1. `npm install`
2. import schema database menggunakan syntak migrasi sequelize `sequelize db:migrate`
3. ubah .env sesuai dengan konfigurasi database masing-masing
4. npm start