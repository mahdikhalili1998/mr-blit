export enum MESSAGE {
  SERVER_ERROR = "server error , try again later",
  POST = "succsessfully user added",
  GET = "succsessfully user found",
  NOT_FOUND = "user not founded",
}

export enum STATUS {
  ERROR = 500,
  POST = 201,
  GET = 200,
  NOT_FOUND = 404,
}
