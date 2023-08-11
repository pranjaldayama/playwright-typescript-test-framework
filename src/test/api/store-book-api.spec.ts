import {expect, test } from "@playwright/test";
import { ADD_LIST_OF_BOOKS_URL, API_ACCOUNT_CREATION_URL, DELETE_BOOK_URL } from "../../data/changeless.data";
import * as faker from 'faker';

 let userId : string;
 let username: string;
 let isbn: string;


test("Create User account", async ({request}) => {

    const response = await request.post(`${API_ACCOUNT_CREATION_URL}`,{
    data : {        
        "userName": "ShaunMGerritsma@446",
        "password": "GhanaGerritsma@345"
      }, headers: {
        "Accept": "application/json"
    }
    });
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    const responseUser = await response.json();
    userId= responseUser.userId;
    username = responseUser.username;
})

test("Add list of books to created user", async ({request}) => {

    const response = await request.post(`${ADD_LIST_OF_BOOKS_URL}`,{
    data : {        
        "books": [
          {
            "userId": userId,
            "username": username,
            "isbn": "isbn12",
            "title": "Captain Underpants",
            "subTitle": "Funny castles",
            "author": "Rudd Kupling",
            "publish_date": "2023-08-11T13:05:29.023Z",
            "publisher": "J.K Isabel",
            "pages": 100,
            "description": "About Captain Underpants",
            "website": "https://captain-underpants.nl"
          }
        ]
      }
    });
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    const responseBook = await response.json();
    isbn = responseBook.isbn;
})

test("Delete added book", async ({request}) => {

    const response = await request.delete(`${DELETE_BOOK_URL}`,{
    params: {
            "isbn": isbn,
            "userId": userId
            },
    });
    expect(response.status()).toBe(204);
    expect(response.ok()).toBeTruthy();
})